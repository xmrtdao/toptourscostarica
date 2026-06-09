#!/usr/bin/env python3
"""Add TTCR text overlay to rafting image"""
from PIL import Image, ImageDraw, ImageFont
import requests
from io import BytesIO

# Try multiple Unsplash rafting images
IMAGE_URLS = [
    "https://source.unsplash.com/800x600/?white-water,rafting",  # Dynamic
    "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&h=600&fit=crop",  # Rafting alt
    "https://images.unsplash.com/photo-1598887142487-3c81e831d0b8?w=800&h=600&fit=crop",  # Rafting 2
]

OUTPUT_PATH = "/data/data/com.termux/files/home/toptourscostarica/assets/images/rafting-ttcr.jpg"

headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
    "Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
}

img = None
used_url = None

for url in IMAGE_URLS:
    print(f"Trying: {url[:60]}...")
    try:
        response = requests.get(url, headers=headers, timeout=30, allow_redirects=True)
        print(f"  Status: {response.status_code}, Size: {len(response.content)} bytes")
        if response.status_code == 200 and len(response.content) > 10000:
            img = Image.open(BytesIO(response.content))
            if img.size[0] > 100:  # Valid image
                used_url = url
                break
    except Exception as e:
        print(f"  Error: {e}")

if not img:
    print("❌ Could not download any rafting image")
    print("Creating placeholder image instead...")
    img = Image.new('RGB', (800, 600), color='#1a5276')
    draw = ImageDraw.Draw(img)
    draw.text((200, 280), "Rafting Image Placeholder", fill='white')
    used_url = "placeholder"

print(f"✅ Using image: {img.size}")
if img.mode != 'RGB':
    img = img.convert('RGB')

draw = ImageDraw.Draw(img)

# Load font
font_paths = [
    "/data/data/com.termux/files/usr/share/fonts/TTF/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
]
font = None
for fp in font_paths:
    try:
        font = ImageFont.truetype(fp, 72)
        print(f"✅ Font: {fp}")
        break
    except:
        pass
if not font:
    font = ImageFont.load_default()

TEXT = "TTCR"
bbox = draw.textbbox((0, 0), TEXT, font=font)
text_w = bbox[2] - bbox[0]
text_h = bbox[3] - bbox[1]
x = (img.width - text_w) // 2
y = img.height - text_h - 40

# Shadow + text
for ox, oy in [(3,3), (-3,-3), (3,-3), (-3,3)]:
    draw.text((x+ox, y+oy), TEXT, font=font, fill="black")
draw.text((x, y), TEXT, font=font, fill="#FF6600")

img.save(OUTPUT_PATH, "JPEG", quality=90)
print(f"✅ Saved: {OUTPUT_PATH}")
print(f"Source: {used_url}")
