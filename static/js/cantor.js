// Cantor Set 绘制函数（再次改进版）
function drawCantorSet(canvas, ctx, startY, startX, length, minHeight, depth) {
    if (depth > 0) {
        ctx.fillRect(startX, startY, length, 1); // 绘制当前行
        // 左侧递归
        drawCantorSet(canvas, ctx, startY + minHeight, startX, length / 3, minHeight, depth - 1);
        // 右侧递归
        drawCantorSet(canvas, ctx, startY + minHeight, startX + 2 * length / 3, length / 3, minHeight, depth - 1);
    }
}

function drawCantor(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop();  // 清空画布并停止之前的动画
    const depth = 6; // 增加递归深度
    const minHeight = 30; // 增加行间距，以便更清楚地看到每层
    drawCantorSet(canvas, ctx, 0, 0, canvas.width, minHeight, depth);
}

export { drawCantor };