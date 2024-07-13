let iteration = 0; // 初始迭代级别

function drawKoch(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop(); // 清除画布并停止任何之前的动画

    // 基础三角形尺寸
    const sideLength = Math.min(canvas.width, canvas.height) * 0.5;
    const height = sideLength * Math.sqrt(3) / 2;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // 绘制线段的辅助函数
    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    // 递归绘制 Koch 曲线
    function kochCurve(x1, y1, x2, y2, depth) {
        if (depth === 0) {
            drawLine(x1, y1, x2, y2);
        } else {
            let dx = x2 - x1;
            let dy = y2 - y1;
            let dist = Math.sqrt(dx * dx + dy * dy) / 3;
            let angle = Math.atan2(dy, dx);
            let x3 = x1 + dx / 3;
            let y3 = y1 + dy / 3;
            let x4 = x1 + 2 * dx / 3;
            let y4 = y1 + 2 * dy / 3;
            let xMid = x3 + dist * Math.cos(angle - Math.PI / 3);
            let yMid = y3 + dist * Math.sin(angle - Math.PI / 3);

            kochCurve(x1, y1, x3, y3, depth - 1);
            kochCurve(x3, y3, xMid, yMid, depth - 1);
            kochCurve(xMid, yMid, x4, y4, depth - 1);
            kochCurve(x4, y4, x2, y2, depth - 1);
        }
    }

    // 设置画线样式
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    // 计算初始三角形的顶点
    const x1 = centerX - sideLength / 2;
    const y1 = centerY + height / 3;
    const x2 = centerX + sideLength / 2;
    const y2 = y1;
    const x3 = centerX;
    const y3 = centerY - 2 * height / 3;

    // 绘制每边的 Koch 曲线
    kochCurve(x1, y1, x2, y2, iteration);
    kochCurve(x2, y2, x3, y3, iteration);
    kochCurve(x3, y3, x1, y1, iteration);
}

// Handle touch event to increase iteration and redraw

function handleTouch(canvas, ctx, clearCanvasAndStop) {
    return function() {
        if (iteration < 6) {  // 如果迭代次数未达到10次
            iteration++;
        } else {  // 达到10次后重置迭代次数
            iteration = 0;  // 重置迭代次数
        }
        drawKoch(canvas, ctx, clearCanvasAndStop);  // 绘制Koch曲线
    };
}


export { drawKoch, handleTouch };