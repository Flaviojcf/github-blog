import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 800px;
  width: 864px;
  margin-bottom: 40px;
`;

export const ContainerInformations = styled.div`
  width: 864px;
  height: 168px;
  background: ${(props) => props.theme.colors["base-profile"]};
  margin-top: -84px;
  padding: 32px;

  & > span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${(props) => props.theme.colors["base-title"]};
  }
`;

export const ContainerReturn = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;

  & > span {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;

    img {
      width: 6.43px;

      height: 11.25px;
    }

    p {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      color: ${(props) => props.theme.colors["brand-blue"]};
    }
  }
  & > p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: ${(props) => props.theme.colors["brand-blue"]};
    line-height: 160%;
    cursor: pointer;
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

export const ContainerContent = styled.div`
  width: 864px;
  padding: 32px;
  height: 422px;
  margin-top: 80px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  pre {
    background: ${({ theme }) => theme.colors["base-post"]};
    width: 100%;
    height: 110px;
    padding: 16px;
  }
`;
