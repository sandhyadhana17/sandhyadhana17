import os
import glob

for filepath in glob.glob("*.html"):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    content = content.replace('<span class="brand-logo">SD</span>', '')
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
        
print("Removed logo.")
