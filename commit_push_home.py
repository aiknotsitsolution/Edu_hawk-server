import subprocess

cmd = 'git add -A && git commit -m "feat(home): modernize UI with 50/50 floating stats card, SVG flags, and dynamic CMS guards" && git push origin feature/study-abroad-finland'

proc = subprocess.run(cmd, cwd=r"e:\AIknotsit-Office-Work\Edu_hawk-Latest\Edu_hawk-server\Eduhawk-website-SEO", shell=True, capture_output=True, text=True)

with open(r"e:\AIknotsit-Office-Work\Edu_hawk-Latest\Edu_hawk-server\commit_out.txt", "w", encoding="utf-8") as f:
    f.write(f"EXIT: {proc.returncode}\n")
    f.write("STDOUT:\n" + proc.stdout + "\n")
    f.write("STDERR:\n" + proc.stderr + "\n")

print("Finished commit and push with exit code:", proc.returncode)
