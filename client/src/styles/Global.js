import styled from "styled-components";

const remy = (px) => `${px / 16}rem`;

export const ItemCard = styled.div`
  border: solid 1px black;
  border-radius: 3px;
  padding: 1em;
  width: 275px;
  height: auto;
  margin: 1% auto;
  overflow-wrap: break-word;
  box-shadow: 3px 3px 3px #888888;
  font-size: auto;
`;

export const CardContainer = styled.div`
  margin-right: ${remy(-15)};
  margin-left: ${remy(-15)};
  display: flex;
  flex-wrap: wrap;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px #888888;
  border: solid 1px black;
  width: 275px;
  padding: 7px;
  margin: 1% auto;
`;

export const Button = styled.button`
  font-size: 1em;
  border: solid 1px black;
  padding: 0em 0.5em;
  border-radius: 3px;
  box-shadow: 1px 1px #888888;
  margin: 1%;
  width: fit-content;
`;

export const FormButton = styled.button`
  font-size: 1em;
  border: solid 1px black;
  border-radius: 3px;
  width: 100%;
`;

export const StyledImg = styled.div`
  margin: 10px;
  display: flex;
  border: solid 2px black;
`;

export const StyledContainer = styled.div`
  margin: 0px 25px;
`;
export const StyledHeader = styled.h1`
  font-size: 3em;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CardText = styled.div`
  height: 225px;
  overflow: scroll;
`;