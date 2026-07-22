from PIL import Image

def remove_bg(img_path):
    img = Image.open(img_path).convert('RGBA')
    datas = img.getdata()

    newData = []
    for item in datas:
        # luma
        luma = 0.299 * item[0] + 0.587 * item[1] + 0.114 * item[2]
        if luma > 180:
            # smooth transition to transparent
            # if luma is 210, alpha is 0
            # if luma is 180, alpha is 255
            alpha = max(0, min(255, int(255 * (1 - (luma - 180) / 30))))
            newData.append((item[0], item[1], item[2], alpha))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(img_path, 'PNG')

remove_bg('AVAlogo.png')
print("Background removed")
