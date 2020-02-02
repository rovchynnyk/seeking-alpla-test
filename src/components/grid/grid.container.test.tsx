import React from 'react';
import { mount } from "enzyme";
import GridContainer from './grid.container';
import GridComponent from './grid.component';

describe("GridContainer", () => {
    const setupComponent = (props = { size: 5 }) =>
        mount(<GridContainer {...props} />);

    test("proper rendering of the component", () => {
        const children = setupComponent().find(GridComponent);
        expect(children).toHaveLength(1);
    });
});
