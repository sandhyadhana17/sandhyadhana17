import os
import glob

replacements = {
    "â€”": "&mdash;",
    "Ã—": "&times;",
    "â†’": "&rarr;",
    "&·": "&middot;",
    "â€œ": "&ldquo;",
    "â€": "&rdquo;",
    "â€™": "&rsquo;",
    "Â": ""
}

for filepath in glob.glob("*.html"):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    for bad, good in replacements.items():
        content = content.replace(bad, good)
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
        
print("Fixed files.")
