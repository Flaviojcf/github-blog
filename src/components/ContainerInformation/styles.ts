import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 864px;
  height: 212px;
  background: ${(props) => props.theme.colors["base-profile"]};
  padding: 32px 40px 32px 40px;
  display: flex;
  margin-top: -106px;
`;

export const ContainerImg = styled.div`
  width: 148px;
  height: 148px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }
`;

export const ContainerInformationText = styled.div`
  width: 612px;
  height: 115px;
  margin-left: 32px;
  & > p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-title"]};
    margin-bottom: 8px;
  }

  & > span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const ContainerSocial = styled.div`
  width: 393px;
  height: 26px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme.colors["base-subtitle"]};
    cursor: pointer;
  }
`;

export const ContainerGithub = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  height: 19px;
  width: 67px;
  cursor: pointer;
  box-sizing: border-box;
  line-height: 19px;
  a {
    display: flex;
    gap: 8px;
    align-items: center;
    height: 19px;
    width: 67px;
    cursor: pointer;
    box-sizing: border-box;
    line-height: 19px;
  }

  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    color: ${(props) => props.theme.colors["brand-blue"]};
  }

  img {
    cursor: pointer;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors["brand-blue"]};
  }
`;
