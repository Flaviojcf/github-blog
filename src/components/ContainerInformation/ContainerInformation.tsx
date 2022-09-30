import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import {
  Container,
  ContainerGithub,
  ContainerImg,
  ContainerInformationText,
  ContainerSocial,
} from "./styles";

interface githubInformationsProps {
  name: string;
  url: string;
  followers: string;
  company?: string;
  bio: string;
  avatar_url: string;
  login: string;
  html_url: string;
}

export function ContainerInformation() {
  const [userInfo, setUserInfo] = useState({} as githubInformationsProps);

  async function getUserInfo() {
    const response = await api.get("/users/flaviojcf");
    setUserInfo(response.data);
  }

  useEffect(() => {
    getUserInfo();
  }, []);


  return (
    <Container>
      <ContainerImg>
        <img src={userInfo.avatar_url} alt="" />
      </ContainerImg>
      <ContainerInformationText>
        <p>{userInfo.name}</p>
        <span>{userInfo.bio}</span>
        <ContainerSocial>
          <span>
            <img src="/github.png" alt="" />
            <p>{userInfo.login}</p>
          </span>
          <span>
            <img src="/employer.png" alt="" />
            <p>{userInfo.company === null ? "Meta" : userInfo.company}</p>
          </span>
          <span>
            <img src="/followers.png" alt="" />
            <p>{userInfo.followers} Seguidores</p>
          </span>
        </ContainerSocial>
      </ContainerInformationText>
      <ContainerGithub>
        <Link to={userInfo.html_url}>
          <p>GITHUB</p>
          <img src="/redirect.png" alt="" />
        </Link>
      </ContainerGithub>
    </Container>
  );
}
