import styled from "styled-components";

export const ContainerSearchForm = styled.div`
  width: 864px;
  height: 87px;
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & p:first-child {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  & p:last-child {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme.colors["base-span"]};
  }
`;

export const ContainerInputSearch = styled.form`
  display: flex;
  gap: 1rem;

  input {
    background: ${(props) => props.theme.colors["base-input"]};
    padding: 12px 16px;
    border-radius: 6px;

    border: none;
    width: 864px;
    height: 50px;
    color: ${(props) => props.theme.colors["base-text"]};
    transition: 0.5s;
    outline: none;

    &:focus {
      border: 1px solid ${(props) => props.theme.colors["brand-blue"]};
    }

    &::placeholder {
      color: ${(props) => props.theme.colors["base-label"]};
    }
  }
`;
