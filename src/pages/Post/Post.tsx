import {
  ContainerInformations,
  ContainerContent,
  ContainerReturn,
  ContainerSocial,
  Container,
} from "./styles";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

export function Post() {
  const navigate = useNavigate()
  
  function handleClick(){
    navigate('/')
  }


  return (
    <Container>
      <ContainerInformations>
        <ContainerReturn>
          <span onClick={()=>handleClick()}>
            <img src="leftArrow.png" alt="" />
            <p>VOLTAR</p>
          </span>
          <p>VER NO GITHUB</p>
        </ContainerReturn>
        <span>JavaScript data types and data structures</span>
        <ContainerSocial>
          <span>
            <img src="/github.png" alt="" />
            <p>Flaviojcf</p>
          </span>
          <span>
            <img src="/calendar.png" alt="" />
            <p>Há 1 dia</p>
          </span>
          <span>
            <img src="/comment.png" alt="" />
            <p>5 Comentários</p>
          </span>
        </ContainerSocial>
      </ContainerInformations>
      <ContainerContent>
        <div>
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </strong>{" "}
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
          <br />
          <br />
          Dynamic typing
          <br />
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </div>

        <pre>
          let foo = 42; // foo is now a number  <br />
          foo = ‘bar’; // foo is now a string  <br />
          foo = true; // foo is now a boolean
        </pre>
      </ContainerContent>
    </Container>
  );
}
