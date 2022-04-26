import React from "react";
import styled from "styled-components";

const DivFlex = styled.div`
  display: flex;
  gridColumn: 2;
`;

const DivComEspaco = styled.div`
  padding: 5px;
`;

const ResultControls = () => (
  <DivFlex>
    <DivComEspaco>Localização</DivComEspaco>
    <DivComEspaco>Safe</DivComEspaco>
    <DivComEspaco>Time</DivComEspaco>
  </DivFlex>
);

export default ResultControls;