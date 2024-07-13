// Turing Patterns 绘制函数
function drawTuring(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop();  // 清空画布并停止之前的动画

    // 假设我们只是模拟一些简单的图案，需要调整算法来生成真正的图案
    for (let i = 0; i < canvas.width; i += 10) {
        for (let j = 0; j < canvas.height; j += 10) {
            const value = Math.floor(Math.random() * 360);
            ctx.fillStyle = `hsl(${value}, 100%, 50%)`;
            ctx.fillRect(i, j, 10, 10);
        }
    }
}

export { drawTuring };