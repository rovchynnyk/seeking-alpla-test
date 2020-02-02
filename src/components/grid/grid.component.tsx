import React, { useState } from "react";
import { GridWrapper, Row, Column } from "./grid.styles";
import { useRaf } from "../../hooks/useRaf";
import { determineGridNextState } from "./grid.utils";

export default (
    { grid }: { grid: number[][] }
) => {
    const [cells, setCells] = useState(grid);

    useRaf(() => {
        setCells((cells) => determineGridNextState(cells));
    });

    return (
        <GridWrapper>
            {cells.map((row, rowIdx) => (
                <Row key={rowIdx}>
                    {row.map((col, colIdx) => (
                        <Column key={colIdx} empty={col === 0} />
                    ))}
                </Row>
            ))}
        </GridWrapper>
    );
};
