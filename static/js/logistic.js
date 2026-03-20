// Logistic Map 分岔图绘制函数
function drawLogistic(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop();  // 清空画布并停止之前的动画

    const numPoints = 300;
    const iterations = 300;
    const last = 100;  // 仅绘制最后100个点，以显示稳定状态

    for (let i = 0; i < numPoints; i++) {
        let r = 2 + 2 * (i / numPoints); // 控制参数从2变化到4
        let x = 0.5;

        for (let j = 0; j < iterations; j++) {
            x = r * x * (1 - x);
            if (j >= iterations - last) {
                ctx.fillStyle = `hsl(${Math.floor(360 * x)}, 100%, 50%)`;
                ctx.fillRect(i * (canvas.width / numPoints), canvas.height - (x * canvas.height), 1, 1);
            }
        }
    }
}

export { drawLogistic };