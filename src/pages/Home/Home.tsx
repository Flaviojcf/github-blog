import { ContainerInformation } from "../../components/ContainerInformation/ContainerInformation";
import { ContainerPost } from "../../components/ContainerPost/ContainerPost";
import { SearchForm } from "./components/SearchForm";
import { Container, ContainerPostGroup } from "./styles";

export function Home() {
  return (
    <Container>
      <ContainerInformation />
      <SearchForm />

      <ContainerPostGroup>
        <ContainerPost />
        <ContainerPost />
        <ContainerPost />
        <ContainerPost />
        <ContainerPost />
        <ContainerPost />
      </ContainerPostGroup>
    </Container>
  );
}
