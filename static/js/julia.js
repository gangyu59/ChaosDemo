// Julia Set 绘制函数
function drawJulia(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop();  // 清空画布并停止之前的动画

    const cx = -0.8;  // Julia set 的实部常数
    const cy = 0.156;   // Julia set 的虚部常数
    const maxIter = 100;  // 减少迭代次数以查看不同的细节

    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            let zx = 1.5 * (x - canvas.width / 2) / (0.4 * canvas.width);
            let zy = (y - canvas.height / 2) / (0.4 * canvas.height);
            let i = 0;

            while (zx * zx + zy * zy < 4 && i < maxIter) {
                const tempX = zx * zx - zy * zy + cx;
                const tempY = 2 * zx * zy + cy;
                zx = tempX;
                zy = tempY;
                i++;
            }

            const color = (i === maxIter) ? 'black' : `hsl(${i % 360}, 100%, 50%)`;
            ctx.fillStyle = color;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

export { drawJulia }; 