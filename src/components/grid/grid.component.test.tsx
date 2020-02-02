import React from 'react';
import { mount } from "enzyme";
import GridComponent from './grid.component';
import { GridWrapper, Row, Column } from "./grid.styles";
import { input } from "./grid.mocks";

describe("GridComponent", () => {
    const setupComponent = (props = { grid: input }) =>
        mount(<GridComponent {...props} />);

    test("proper rendering of the component", () => {
        const gridWrapper = setupComponent().find(GridWrapper);
        const gridRows = gridWrapper.find(Row);
        const gridColumns = gridRows.find(Column);

        expect(gridRows).toHaveLength(5);
        expect(gridColumns).toHaveLength(25);
        expect(gridWrapper).toHaveLength(1);
    });
});
