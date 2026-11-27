# EduHawk Production Nginx Remediation & Deployment Guide

**Document:** AWS EC2 / Nginx Production Remediation Procedure  
**Target Domain:** `https://eduhawk.in/admin/`  
**Host Environment:** Ubuntu Linux, Nginx 1.28.3, AWS EC2  
**Authority:** Authorized Server Administrator (Requires Manager Approval)  
**Date:** November 27, 2026  
**Status:** Ready for Execution by Server Administrator  

---

## 1. Problem Statement & Audit Finding

### The Defect
When navigating to `https://eduhawk.in/admin/` or `https://eduhawk.in/admin/config.yml`, the live Nginx web server returns HTTP 200 with the **React SPA Homepage HTML** (Content-Length: 6,482 bytes, containing GTM `G-ZFSYLSVLTT`), rather than Decap CMS.

### Root Cause
1. **Missing Static Files in Webroot:** The build artifact directory `dist/admin/` was either omitted from the latest production deployment rsync/scp, or is not situated at the webroot.
2. **SPA Catch-All Interception:** Nginx's `location / { try_files $uri $uri/ /index.html; }` catches all requests under `/admin` because no matching file was found on the EC2 filesystem.

---

## 2. Required Static Files

The production webroot must contain:

```text
/var/www/eduhawk/dist/admin/
├── index.html   (~600 bytes, Decap CMS container)
└── config.yml   (~1.68 MB, 32,685 lines, CMS collections definition)
```

Ensure file ownership and permissions allow Nginx (`www-data`) to read them:
```bash
sudo chown -R www-data:www-data /var/www/eduhawk/dist/admin
sudo chmod 755 /var/www/eduhawk/dist/admin
sudo chmod 644 /var/www/eduhawk/dist/admin/*
```

---

## 3. Step-by-Step Remediation Procedure

> [!CAUTION]
> This procedure requires root/sudo privileges on the AWS EC2 production instance. Make no changes without scheduling and manager sign-off.

### Step 1: Create Timestamped Configuration Backup
```bash
sudo cp /etc/nginx/sites-available/eduhawk /etc/nginx/sites-available/eduhawk.bak.$(date +%F_%T)
```

### Step 2: Add Dedicated Admin Location Blocks
Edit `/etc/nginx/sites-available/eduhawk` (or your active virtual host file):

```nginx
# --- EduHawk Decap CMS Routing ---

# 1. Route for Decap CMS Single Page Application
location /admin {
    alias /var/www/eduhawk/dist/admin;
    index index.html;
    try_files $uri $uri/ /admin/index.html;

    # Security Headers for Admin Portal
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Robots-Tag "noindex, nofollow" always;
}

# 2. Strict MIME-type serving for CMS YAML configuration
location ~* ^/admin/.*\.ya?ml$ {
    alias /var/www/eduhawk/dist/admin;
    default_type text/yaml;
    add_header Content-Type text/yaml always;
    add_header Cache-Control "no-cache, no-store, must-revalidate" always;
    add_header X-Robots-Tag "noindex, nofollow" always;
}
```

### Step 3: Validate Nginx Syntax
Before restarting or reloading Nginx, test configuration syntax:
```bash
sudo nginx -t
```
*Expected Output:*
```text
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### Step 4: Gracefully Reload Nginx
```bash
sudo systemctl reload nginx
```

---

## 4. Post-Deployment Verification

Execute the following curl verification checks from any external machine:

### 1. Verify Decap CMS HTML Delivery
```bash
curl -I https://eduhawk.in/admin/
```
*Expected Output:*
- `HTTP/1.1 200 OK`
- `Content-Type: text/html`
- Content-Length: ~580–610 bytes (matches Decap CMS `index.html`, **not** 6,482 bytes SPA)

### 2. Verify Decap CMS YAML Configuration Delivery
```bash
curl -I https://eduhawk.in/admin/config.yml
```
*Expected Output:*
- `HTTP/1.1 200 OK`
- `Content-Type: text/yaml` (or `application/x-yaml`)
- Content-Length: > 1,600,000 bytes

### 3. Verify YAML Content First Line
```bash
curl -s https://eduhawk.in/admin/config.yml | head -n 5
```
*Expected Output:*
```yaml
backend:
  name: github
  repo: aiknotsitsolution/Edu_hawk-server
  branch: master
```

---

## 5. Rollback Procedure

If any issue arises or website routing is degraded:

```bash
# 1. Restore previous configuration
sudo cp /etc/nginx/sites-available/eduhawk.bak.* /etc/nginx/sites-available/eduhawk

# 2. Test configuration
sudo nginx -t

# 3. Reload Nginx
sudo systemctl reload nginx
```
