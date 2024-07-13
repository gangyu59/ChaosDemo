// Sierpinski Triangle 绘制函数
function drawSierpinski(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop();  // 清空画布并停止之前的动画

    const depth = 6;  // 递归深度，可以调整以查看不同的细节
    const height = canvas.height;
    const width = canvas.width;

    // 定义三角形的顶点
    const x1 = 0;
    const y1 = height;
    const x2 = width;
    const y2 = height;
    const x3 = width / 2;
    const y3 = 0;

    drawTriangle(ctx, x1, y1, x2, y2, x3, y3, depth);
}

function drawTriangle(ctx, x1, y1, x2, y2, x3, y3, depth) {
    if (depth === 0) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.fill();
    } else {
        // 计算每条边的中点
        const x12 = (x1 + x2) / 2;
        const y12 = (y1 + y2) / 2;
        const x23 = (x2 + x3) / 2;
        const y23 = (y2 + y3) / 2;
        const x31 = (x3 + x1) / 2;
        const y31 = (y3 + y1) / 2;

        // 递归地在三个新的三角形上绘制谢尔宾斯基三角形
        drawTriangle(ctx, x1, y1, x12, y12, x31, y31, depth - 1);
        drawTriangle(ctx, x12, y12, x2, y2, x23, y23, depth - 1);
        drawTriangle(ctx, x31, y31, x23, y23, x3, y3, depth - 1);
    }
}

export { drawSierpinski };