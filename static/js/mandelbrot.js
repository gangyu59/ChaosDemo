// Mandelbrot Set 绘制函数
function drawMandelbrot(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop(); // 清空画布并停止之前的动画

    var magnificationFactor = 220;
    var panX = 2;
    var panY = 1.5;

    for (var x = 0; x < canvas.width; x++) {
        for (var y = 0; y < canvas.height; y++) {
            var m = mandelbrot(x / magnificationFactor - panX, y / magnificationFactor - panY);
            ctx.fillStyle = (m === 0) ? '#000' : `hsl(${m * 360 / 100}, 100%, 50%)`;
            ctx.fillRect(x, y, 1, 1);
        }
    }

    function mandelbrot(x, y) {
        var real = x;
        var imag = y;
        for (var i = 0; i < 100; i++) {
            var tempReal = real * real - imag * imag + x;
            var tempImag = 2 * real * imag + y;
            real = tempReal;
            imag = tempImag;

            if (real * imag > 5)
                return (i / 100) * 100; // Normalize and return a percentage
        }
        return 0; // Belongs to the set
    }
}

export { drawMandelbrot };