import { startGameOfLife } from './gameOfLife.js';
import { drawMandelbrot } from './mandelbrot.js';
import { drawJulia } from './julia.js';
import { drawSierpinski } from './sierpinski.js';
import { drawLorenz } from './lorenz.js';
import { drawRossler } from './rossler.js';
import { drawHenon } from './henon.js';
import { drawLogistic } from './logistic.js';
import { drawIkeda } from './ikeda.js';
import { drawCantor } from './cantor.js';
import { drawBarnsleyFern } from './barnsleyFern.js';
import { drawTuring } from './turing.js';
import { drawKoch, handleTouch } from './koch.js';
import { drawDoublePendulum, stopDoublePendulum } from './doublePendulum.js';

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    let intervalId = null;

    function clearCanvasAndStop() {
        stopDoublePendulum(); // 调用来自 doublePendulum.js 的停止函数
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);  // 重置变换矩阵
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // 清理画布
    }

    document.getElementById('showMandelbrot').addEventListener('click', function() {
        clearCanvasAndStop();
        drawMandelbrot(canvas, ctx, clearCanvasAndStop);
    });

    document.getElementById('showGameOfLife').addEventListener('click', function() {
        clearCanvasAndStop();
        intervalId = startGameOfLife(canvas, ctx, clearCanvasAndStop);
    });

    document.getElementById('showJulia').addEventListener('click', function() {
        clearCanvasAndStop();
        drawJulia(canvas, ctx, clearCanvasAndStop);
    });

    document.getElementById('showSierpinski').addEventListener('click', function() {
        clearCanvasAndStop();
        drawSierpinski(canvas, ctx, clearCanvasAndStop);
    });

    document.getElementById('showLorenz').addEventListener('click', function() {
        clearCanvasAndStop();
        drawLorenz(canvas, ctx, clearCanvasAndStop);
    });

    document.getElementById('showRossler').addEventListener('click', function() {
        clearCanvasAndStop();
        drawRossler(canvas, ctx, clearCanvasAndStop);
    });

    document.getElementById('showHenon').addEventListener('click', function() {
        clearCanvasAndStop();
        drawHenon(canvas, ctx, clearCanvasAndStop);
    });

    document.getElementById('showLogistic').addEventListener('click', function() {
        clearCanvasAndStop();
        drawLogistic(canvas, ctx, clearCanvasAndStop);
    });

    document.getElementById('showIkeda').addEventListener('click', function() {
        clearCanvasAndStop();
        drawIkeda(canvas, ctx, clearCanvasAndStop);
    });

    document.getElementById('showCantor').addEventListener('click', function() {
        clearCanvasAndStop();
        drawCantor(canvas, ctx, clearCanvasAndStop);
    });

    document.getElementById('showBarnsleyFern').addEventListener('click', function() {
        clearCanvasAndStop();
        drawBarnsleyFern(canvas, ctx, clearCanvasAndStop);
    });

    document.getElementById('showTuring').addEventListener('click', function() {
        clearCanvasAndStop();
        drawTuring(canvas, ctx, clearCanvasAndStop);
    });

    let currentTouchHandler = null;  // This will store the current touch event handler

    document.getElementById('showKoch').addEventListener('click', function() {
        clearCanvasAndStop();
        drawKoch(canvas, ctx, clearCanvasAndStop);  // Draw Koch curve
        // Remove the existing touch event listener to prevent duplicates
        if (currentTouchHandler) {
            canvas.removeEventListener('touchstart', currentTouchHandler);
        }
        // Create a new touch event handler with the current canvas and context
        currentTouchHandler = handleTouch(canvas, ctx, clearCanvasAndStop);
        canvas.addEventListener('touchstart', currentTouchHandler);
    });

    document.getElementById('showDoublePendulum').addEventListener('click', function() {
        clearCanvasAndStop();
        animationFrameId = drawDoublePendulum(canvas, ctx, clearCanvasAndStop); // 调整这一行
    });

    // Register the service worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function(error) {
                console.log('ServiceWorker registration failed: ', error);
            });
        });
    }
});