export const initTable = (size: number): number[][] => {
    const table: number[][] = [];
    for (let row = 0; row < size; row++) {
        table[row] = [];
        for (let col = 0; col < size; col++) {
            table[row][col] = Math.round(Math.random());
        }
    }

    return table;
};

export const determineGridNextState = (cells: number[][]): number[][] => {
    const cellsClone: number[][] = [];
    const cellsLength = cells.length;

    for (let row = 0; row < cellsLength; row++) {
        cellsClone[row] = [];
        for (let col = 0; col < cellsLength; col++) {
            let sum = 0;

            // Counting all neighbouring 1s
            if (row > 0 && col > 0
                && cells[row - 1][col - 1] === 1)
                sum++;
            if (row > 0 && cells[row - 1][col] === 1)
                sum++;
            if (row > 0 && col < cellsLength - 1
                && cells[row - 1][col + 1] === 1)
                sum++;
            if (col < cellsLength - 1 && cells[row][col + 1] === 1)
                sum++;
            if (row < cellsLength - 1 && col < cellsLength - 1
                && cells[row + 1][col + 1] === 1)
                sum++;
            if (row < cellsLength - 1 && cells[row + 1][col] === 1)
                sum++;
            if (row < cellsLength - 1 && col > 0
                && cells[row + 1][col - 1] === 1)
                sum++;
            if (col > 0 && cells[row][col - 1] === 1)
                sum++;

            // apply rules for the next state
            if (cells[row][col] === 1) {
                if (sum < 2 || sum > 3) {
                    cellsClone[row][col] = 0;
                } else if (sum === 2 || sum === 3) {
                    cellsClone[row][col] = 1;
                }
            } else {
                if (sum === 3) {
                    cellsClone[row][col] = 1;
                } else {
                    cellsClone[row][col] = 0;
                }
            }
        }
    }

    return cellsClone;
};
