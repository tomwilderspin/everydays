// Remove Islands from a grid.
export default (matrix: number[][]) => {
    // collection of points that stores '1' (land) that is connected to a border (1's that are not islands).
    let visited = <{[key: string]: boolean}>{};

    // check if given point is on the boundry edge of the matrix (never be an island).
    const isOnBoundry = (matrix: number[][], [x, y]: [number, number]): boolean => {
        const rowLength = matrix.length;
        const colLength = matrix[x].length;
        // check if pos is on a boundary...
        if (x === 0 || y === 0 || rowLength - 1 === x || colLength - 1 === y) {
            return true;
        }
        return false;
    }

    // checks if a given point is in the bounds of the matrix and has the value of '1' (land).
    const isInBoundsAndLand = (matrix: number[][], [x, y]: [number, number]): boolean => x >= 0 && x < matrix.length && y >= 0 && y < matrix[x].length && matrix[x][y] === 1;

    // checks to see if points are connected to the mainland in any direction (DFS traversal). 
    const checkForMainland = (matrix: number[][], currentPos: [number, number]): boolean => {
        const [currentX, currentY] = currentPos;
        const directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];
        for (const [directionX, directionY] of directions) {
            const [neighbourX, neighbourY] = [currentX + directionX, currentY + directionY];
            if (!visited[`${neighbourX}-${neighbourY}`]) {
                if (isInBoundsAndLand(matrix, [neighbourX, neighbourY])) {
                    visited = { ...visited, [`${neighbourX}-${neighbourY}`]: true };
                    checkForMainland(matrix, [neighbourX, neighbourY]);
                    
                }
            }
        }
        return false;
    };

    // First pass: find every point connected to border.
    matrix.forEach((row, rowIndex) => row.forEach((col, colIndex) => {
        if (col === 1 && isOnBoundry(matrix, [rowIndex, colIndex])) {
            checkForMainland(matrix, [rowIndex, colIndex]);
        }
    }));

    // Second pass: replace each '1' with a '0' that isn't connected to the border.
    return matrix.map((row, rowIndex) => row.map((col, colIndex) => {
        if (col === 1 && !isOnBoundry(matrix, [rowIndex, colIndex]) && !visited[`${rowIndex}-${colIndex}`]) {
            return 0;
        }
        return col;
    })); 
};
