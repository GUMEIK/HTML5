// 获取画板
const canvas = document.getElementById('canvas');
// 获取画笔，ｃａｎｖａｓ只能创建２ｄ图形
const ctx = canvas.getContext('2d');
// 起点(像素位置)
ctx.moveTo(100,100);
// 线宽设置
ctx.lineWidth = 10;
// 本次画笔的终点
ctx.lineTo(200,100);
ctx.lineTo(200,200);
// 闭合
ctx.closePath();
// 填充
// ctx.fill();
// 绘制
ctx.stroke();//每一次结束为一个stroke,如果画笔没有抬起，以最后一次为准
// 抬起画笔
ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(300,200);
ctx.lineTo(200,200);
// 闭合
ctx.closePath();
ctx.stroke()
