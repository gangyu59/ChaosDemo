// Ikeda Map 绘制函数（最终改进版）
function drawIkeda(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop();  // 清空画布并停止之前的动画

    const u = 0.918;
    const numPoints = 500000; // 点的数量，确保足够多以覆盖更多区域
    let x = 0, y = 0;

    for (let i = 0; i < numPoints; i++) {
        const t = 0.4 - 6 / (1 + x * x + y * y);
        let x1 = 1 + u * (x * Math.cos(t) - y * Math.sin(t));
        let y1 = u * (x * Math.sin(t) + y * Math.cos(t));
        x = x1;
        y = y1;

        // 调整绘制坐标和点的大小
        let plotX = Math.floor((x + 10) * (canvas.width / 30)); // 更宽的缩放范围
        let plotY = Math.floor((y + 5) * (canvas.height / 15)); // 更宽的缩放范围

        ctx.fillStyle = 'red';
        ctx.fillRect(plotX, plotY, 4, 4); // 增加点的尺寸，使之更易见
    }
}

export { drawIkeda };