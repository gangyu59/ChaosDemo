// Lorenz Attractor 绘制函数
function drawLorenz(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop();  // 清空画布并停止之前的动画

    // Lorenz系统参数
    const sigma = 10;
    const rho = 28;
    const beta = 8 / 3;

    // 初始条件
    let x = 0.01;
    let y = 0;
    let z = 0;

    // 时间步长
    const dt = 0.01;

    // 缩放因子，用于将模拟的值映射到画布上
    const scale = 9;

    // 绘制次数
    const steps = 10000;

    // 移动画布中心
    ctx.translate(canvas.width / 2, canvas.height / 9);

    // 开始绘制路径
    ctx.beginPath();
    ctx.moveTo(x * scale, z * scale);

    for (let i = 0; i < steps; i++) {
        // 洛伦兹吸引子的方程
        const dx = sigma * (y - x) * dt;
        const dy = (x * (rho - z) - y) * dt;
        const dz = (x * y - beta * z) * dt;

        x += dx;
        y += dy;
        z += dz;

        ctx.lineTo(x * scale, z * scale);
    }

    ctx.strokeStyle = 'rgba(255, 0, 0, 0.6)';
    ctx.stroke();
    ctx.setTransform(1, 0, 0, 1, 0, 0); // 重置画布的变换矩阵
}

export { drawLorenz };