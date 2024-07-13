// doublePendulum.js

let animationFrameId = null;

function drawDoublePendulum(canvas, ctx, clearCanvasAndStop) {
    clearCanvasAndStop(); // Clears the canvas and stops any previous animations

    // Double pendulum parameters
    const length1 = 200; // Length of the first pendulum arm
    const length2 = 200; // Length of the second pendulum arm
    const mass1 = 10; // Mass of the first pendulum bob
    const mass2 = 10; // Mass of the second pendulum bob
    const gravity = 9.81; // Gravity acceleration

    // Initial conditions
    let angle1 = Math.PI / 2; // Initial angle for the first pendulum
    let angle2 = Math.PI / 2; // Initial angle for the second pendulum
    let angle1Velocity = 0; // Initial angular velocity for the first pendulum
    let angle2Velocity = 0; // Initial angular velocity for the second pendulum

    const originX = canvas.width / 2;
    const originY = 50; // Fixed point from which the pendulum hangs

    // Simulation time step
    const timeStep = 0.1;

    // Function to update the pendulum's position
    function update() {
        const numerator1 = -gravity * (2 * mass1 + mass2) * Math.sin(angle1);
        const numerator2 = -mass2 * gravity * Math.sin(angle1 - 2 * angle2);
        const numerator3 = -2 * Math.sin(angle1 - angle2) * mass2;
        const numerator4 = angle2Velocity * angle2Velocity * length2 + angle1Velocity * angle1Velocity * length1 * Math.cos(angle1 - angle2);
        const denominator = length1 * (2 * mass1 + mass2 - mass2 * Math.cos(2 * angle1 - 2 * angle2));
        const angle1Acceleration = (numerator1 + numerator2 + numerator3 * numerator4) / denominator;

        const numerator5 = 2 * Math.sin(angle1 - angle2);
        const numerator6 = (angle1Velocity * angle1Velocity * length1 * (mass1 + mass2));
        const numerator7 = gravity * (mass1 + mass2) * Math.cos(angle1);
        const numerator8 = angle2Velocity * angle2Velocity * length2 * mass2 * Math.cos(angle1 - angle2);
        const denominator2 = length2 * (2 * mass1 + mass2 - mass2 * Math.cos(2 * angle1 - 2 * angle2));
        const angle2Acceleration = (numerator5 * (numerator6 + numerator7 + numerator8)) / denominator2;

        angle1Velocity += angle1Acceleration * timeStep;
        angle2Velocity += angle2Acceleration * timeStep;
        angle1 += angle1Velocity * timeStep;
        angle2 += angle2Velocity * timeStep;

        ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform matrix before clearing
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas

        ctx.translate(originX, originY); // Move the origin to the pendulum's fixed point

        // Draw the first pendulum
        let x1 = length1 * Math.sin(angle1);
        let y1 = length1 * Math.cos(angle1);

        // Draw the second pendulum
        let x2 = x1 + length2 * Math.sin(angle2);
        let y2 = y1 + length2 * Math.cos(angle2);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // Request the next animation frame and store the ID
        animationFrameId = requestAnimationFrame(update);
    }

    ctx.strokeStyle = '#000'; // Black color line
    ctx.lineWidth = 2; // Line thickness

    animationFrameId = requestAnimationFrame(update); // Start the animation
    return animationFrameId; // Return the initial animation frame ID
}

// 添加停止动画的函数
export function stopDoublePendulum() {
    if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }
}

export { drawDoublePendulum };
