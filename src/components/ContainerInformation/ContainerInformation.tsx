import {
  Container,
  ContainerGithub,
  ContainerImg,
  ContainerInformationText,
  ContainerSocial,
} from "./styles";

export function ContainerInformation() {
  return (
    <Container>
      <ContainerImg>
        <img
          src="https://avatars.githubusercontent.com/u/71460942?v=4"
          alt=""
        />
      </ContainerImg>
      <ContainerInformationText>
        <p>Flavio Costa</p>
        <span>
          University student of electrical engineering, studying and improving
          my skills in web programming and other development areas.
        </span>
        <ContainerSocial>
          <span>
            <img src="/github.png" alt="" />
            <p>Flaviojcf</p>
          </span>
          <span>
            <img src="/employer.png" alt="" />
            <p>Google</p>
          </span>
          <span>
            <img src="/followers.png" alt="" />
            <p>34 Seguidores</p>
          </span>
        </ContainerSocial>
      </ContainerInformationText>
      <ContainerGithub>
        <p>GITHUB</p>
        <img src="/redirect.png" alt="" />
      </ContainerGithub>
    </Container>
  );
}
