// Barnsley Fern 绘制函数
function drawBarnsleyFern(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop();  // 清空画布并停止之前的动画

    let x = 0, y = 0;
    const numPoints = 50000;

    for (let i = 0; i < numPoints; i++) {
        let nextX, nextY;
        const r = Math.random();

        if (r < 0.01) {
            nextX = 0;
            nextY = 0.16 * y;
        } else if (r < 0.86) {
            nextX = 0.85 * x + 0.04 * y;
            nextY = -0.04 * x + 0.85 * y + 1.6;
        } else if (r < 0.93) {
            nextX = 0.2 * x - 0.26 * y;
            nextY = 0.23 * x + 0.22 * y + 1.6;
        } else {
            nextX = -0.15 * x + 0.28 * y;
            nextY = 0.26 * x + 0.24 * y + 0.44;
        }

        x = nextX;
        y = nextY;

        // 根据Fern的实际大小调整位置和缩放
        let plotX = Math.floor(canvas.width / 2 + x * 50);
        let plotY = Math.floor(canvas.height - y * 50);

        ctx.fillStyle = 'green';
        ctx.fillRect(plotX, plotY, 1, 1);
    }
}

export { drawBarnsleyFern };