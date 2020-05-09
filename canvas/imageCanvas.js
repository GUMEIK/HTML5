// 图片转canvas
function drawImage(src) {
    let image = new Image();
    image.src = src;
    console.log(image);//../image/mao.jpeg
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
    }
    return canvas;
}
function canvasToImage() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 100);
    ctx.stroke();
    const image = new Image();
    image.src = canvas.toDataURL('image');//返回的是一串Base64编码的URL
    document.body.appendChild(image);
    return image;
}






