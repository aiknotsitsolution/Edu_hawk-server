import subprocess

cmd = 'git add -A && git commit -m "feat(about): modernize About Us page UI, fix slide indicator clipping, restore testimonials, and update checklist" && git push origin feature/study-abroad-finland'

proc = subprocess.run(cmd, cwd=r"e:\AIknotsit-Office-Work\Edu_hawk-Latest\Edu_hawk-server\Eduhawk-website-SEO", shell=True, capture_output=True, text=True)

with open(r"e:\AIknotsit-Office-Work\Edu_hawk-Latest\Edu_hawk-server\about_push.txt", "w", encoding="utf-8") as f:
    f.write(f"EXIT: {proc.returncode}\n")
    f.write("STDOUT:\n" + proc.stdout + "\n")
    f.write("STDERR:\n" + proc.stderr + "\n")

print("Exit code:", proc.returncode)
