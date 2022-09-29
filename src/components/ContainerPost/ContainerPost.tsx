import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function ContainerPost() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/post");
  }
  return (
    <Container onClick={() => handleClick()}>
      <header>
        <p>JavaScript data types and data structures</p>
        <span>Há 1 dia</span>
      </header>
      <span>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties....
      </span>
    </Container>
  );
}
