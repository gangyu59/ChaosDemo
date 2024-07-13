// Game of Life 主函数
function startGameOfLife(canvas, ctx, clearCanvasAndStop) {
    var width = canvas.width;
    var height = canvas.height;
    var cellSize = 10;
    var gridWidth = Math.floor(width / cellSize);
    var gridHeight = Math.floor(height / cellSize);
    var grid = createGrid(gridWidth, gridHeight);
    var intervalId = null;

    function createGrid(cols, rows) {
        var arr = new Array(cols);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = new Array(rows).fill(0).map(() => Math.floor(Math.random() * 2));
        }
        return arr;
    }

    function drawGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 每次绘制前清除画布
        for (var i = 0; i < gridWidth; i++) {
            for (var j = 0; j < gridHeight; j++) {
                ctx.fillStyle = grid[i][j] ? 'black' : 'white';
                ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
            }
        }
    }

    function updateGrid() {
        var next = createGrid(gridWidth, gridHeight);
        for (var i = 0; i < gridWidth; i++) {
            for (var j = 0; j < gridHeight; j++) {
                var state = grid[i][j];
                var neighbors = countNeighbors(grid, i, j);
                if (state === 0 && neighbors === 3) {
                    next[i][j] = 1;
                } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                    next[i][j] = 0;
                } else {
                    next[i][j] = state;
                }
            }
        }
        grid = next;
        drawGrid();
    }

    function countNeighbors(grid, x, y) {
        var sum = 0;
        for (var i = -1; i < 2; i++) {
            for (var j = -1; j < 2; j++) {
                var col = (x + i + gridWidth) % gridWidth;
                var row = (y + j + gridHeight) % gridHeight;
                sum += grid[col][row];
            }
        }
        sum -= grid[x][y];
        return sum;
    }

    clearInterval(intervalId);
    drawGrid();  // Initial draw of the grid
    intervalId = setInterval(updateGrid, 100);  // Update the grid every 100 milliseconds
    return intervalId;
}

export { startGameOfLife };