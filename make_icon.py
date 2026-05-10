import sys
from PIL import Image

def make_transparent(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        new_data = []
        for item in datas:
            r, g, b, a = item
            # White or near white background
            if r > 240 and g > 240 and b > 240:
                new_data.append((255, 255, 255, 0)) # fully transparent
            elif r > 220 and g > 220 and b > 220:
                # Anti-aliasing transition
                avg = (r + g + b) / 3
                alpha = int(max(0, min(255, (240 - avg) * (255 / 20))))
                new_data.append((r, g, b, alpha))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Successfully processed: {output_path}")
    except Exception as e:
        print(f"Error processing image: {e}")
        sys.exit(1)

if __name__ == "__main__":
    icon_path = r"public\images\fukusuke_icon.png"
    make_transparent(icon_path, icon_path)
