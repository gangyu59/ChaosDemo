// Henon Map 绘制函数（调整版）
function drawHenon(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop();  // 清空画布并停止之前的动画

    const a = 1.4;
    const b = 0.3;
    const numPoints = 100000;
    let x = 0, y = 0;

    for (let i = 0; i < numPoints; i++) {
        let x1 = 1 - a * x * x + y;
        let y1 = b * x;
        x = x1;
        y = y1;

        // 更合适的缩放和平移参数
        let plotX = Math.floor((x + 1.5) * (canvas.width / 3));
        let plotY = Math.floor((-y + 0.5) * canvas.height);

        ctx.fillStyle = 'blue';
        ctx.fillRect(plotX, plotY, 1, 1);
    }
}

export { drawHenon };