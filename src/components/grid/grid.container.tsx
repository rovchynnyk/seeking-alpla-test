import React, { useState, useEffect } from "react";
import GridComponent from "./grid.component";
import { initTable } from "./grid.utils";

export default ({ size }: { size: number }) => {
    const [grid, setGrid] = useState<number[][]>([]);

    useEffect(() => {
        setGrid(initTable(size));
    }, [size]);

    return (
        grid.length > 0 ? <GridComponent grid={grid} /> : null
    )
};
