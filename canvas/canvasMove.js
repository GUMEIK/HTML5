const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// 坐标系平移
ctx.translate(100,100);
// 旋转，以　　坐标系原点　　默认为画布的左上角(原点)开始旋转，横向x轴
ctx.rotate(Math.PI / 6);
ctx.moveTo(0,0);
ctx.lineTo(100,0);
ctx.stroke();
// 矩形缩放ctx.scale()