/**
 * 
ImageData对象不是图片，它指定画布上的一部分（矩形），并保存该矩形内每个像素的信息。
对于ImageData对象中的每个像素，有四段信息，即RGBA值：
R-红色（从0-255）
G-绿色（从0-255）
B-蓝色（从0-255）
A-alpha通道（从0-255； 0是透明的，255是完全可见）
颜色/ alpha信息保存在数组中，并存储在ImageData对象的 data属性中。
 */
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// 创建一个100 * 100像素的ImageData对象
let imgData = ctx.createImageData(100, 100);
// console.log(imgData.data)
let i;
// 其中每个像素均为红色，然后将其放在画布上：
for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i + 0] = 255;
    imgData.data[i + 1] = 0;
    imgData.data[i + 2] = 0;
    imgData.data[i + 3] = 255;
}
let image = new Image();
image.src = '../image/mao.jpeg';
image.onload = () => {
    const width = image.width;//number
    const height = image.height;
    console.log(width)
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0)
    // 讲绘制出来的imageData加进去
    ctx.putImageData(imgData, 10, 10);
    let image2 = new Image();
    image2.src = '../image/logo.png';
    image2.onload = () => {
        const clientWidth = image2.width;
        ctx.drawImage(image2, width - clientWidth, 0)
        const imageData = ctx.getImageData(0, 0, clientWidth, height);
        for (let i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = 255 - imgData.data[i];
            imgData.data[i + 1] = 255 - imgData.data[i + 1];
            imgData.data[i + 2] = 255 - imgData.data[i + 2];
            imgData.data[i + 3] = 255;
        }

        ctx.putImageData(imgData, 0, 0);
    }
}

