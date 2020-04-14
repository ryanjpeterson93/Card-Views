import styled from "styled-components";

const remy = (px) => `${px / 16}rem`;

export const ItemCard = styled.div`
  border: solid 1px black;
  border-radius: 3px;
  padding: 1em;
  width: 275px;
  height: auto;
  margin: 5px;
  overflow-wrap: break-word;
`;

export const CardContainer = styled.div`
  margin-right: ${remy(-15)};
  margin-left: ${remy(-15)};
  display: flex;
  flex-wrap: wrap;
`;
