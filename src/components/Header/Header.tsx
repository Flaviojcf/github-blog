import { Container } from "./styles";
import coverImagem from "/cover.png"

export function Header() {
  return (
    <Container>
      <img src={coverImagem}/>
    </Container>
  );
}
