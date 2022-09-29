import styled from "styled-components";

export const Container = styled.div`
  width: 416px;
  height: 260px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors["base-post"]};
  padding: 32px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors["base-post"]};
  transition: 0.4s;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors["base-label"]};
  }

  header {
    display: flex;

    & > p {
      font-family: "Nunito";
      font-style: normal;

      max-width: 280px;
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: ${(props) => props.theme.colors["base-title"]};
    }
    & > span {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${(props) => props.theme.colors["base-span"]};
      height: 22px;
      width: 100px;
      margin-left: 20px;
    }
  }

  & > span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme.colors["base-text"]};
    overflow: hidden;
  }
`;
