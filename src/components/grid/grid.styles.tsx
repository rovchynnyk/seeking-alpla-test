import styled from "styled-components";

export const Row = styled.div`
  height: 10px;
`;

export const Column = styled.div`
  display: inline-flex;
  width: 10px;
  height: inherit;
  background-color: 
    ${(props: { empty: boolean }) => (props.empty ? "#fff" : "#000")};
`;

export const GridWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;
