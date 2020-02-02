import { initTable, determineGridNextState } from "./grid.utils";
import { input } from "./grid.mocks";

describe("Grid Utils functions", () => {
    test("initTable returns different values on each invocations", () => {
        const result1 = initTable(50);
        const result2 = initTable(50);

        expect(result1).not.toEqual(result2);
        expect(result1).toHaveLength(50);
    });

    test("determineGridNextState returns next state WRT current state", () => {
        const output = [
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0],
        ];

        const result = determineGridNextState(input);

        expect(result).toEqual(output);
    });
});
