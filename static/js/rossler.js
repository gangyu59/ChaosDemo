// Rossler Attractor 绘制函数
function drawRossler(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop();  // 清空画布并停止之前的动画

    // Rossler系统参数
    const a = 0.2;
    const b = 0.2;
    const c = 5.7;

    // 初始条件
    let x = 0.1;
    let y = 0;
    let z = 0;

    // 时间步长
    const dt = 0.01;

    // 缩放因子，用于将模拟的值映射到画布上
    const scale = 25;

    // 绘制次数
    const steps = 10000;

    // 移动画布中心
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // 开始绘制路径
    ctx.beginPath();
    ctx.moveTo(x * scale, y * scale); // 修改为 x, y 的视图，可以更改为 x, z 以查看不同的视角

    for (let i = 0; i < steps; i++) {
        // Rossler吸引子的方程
        const dx = (-y - z) * dt;
        const dy = (x + a * y) * dt;
        const dz = (b + z * (x - c)) * dt;

        x += dx;
        y += dy;
        z += dz;

        ctx.lineTo(x * scale, y * scale); // 可更改为 (x * scale, z * scale) 观察不同视角
    }

    ctx.strokeStyle = 'rgba(0, 150, 255, 0.6)'; // 选择一个独特的颜色以区分不同的吸引子
    ctx.stroke();
    ctx.setTransform(1, 0, 0, 1, 0, 0); // 重置画布的变换矩阵
}

export { drawRossler };