import {
  ContainerInformations,
  ContainerContent,
  ContainerReturn,
  ContainerSocial,
  Container,
} from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { relativeDateFormatter } from "../../utils/dateFormatter";
import ReactMarkdown from "react-markdown";
import { Header } from "../../components/Header/Header";

interface PostProps {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Post() {
  const { id } = useParams();
  const [postInformations, setPostInformations] = useState({} as PostProps);
  const formattedDate = relativeDateFormatter(postInformations?.created_at);
  const navigate = useNavigate();

  async function getPostInfo() {
    const response = await api.get(`/repos/Flaviojcf/github-blog/issues/${id}`);

    setPostInformations(response.data);
  }
  useEffect(() => {
    getPostInfo();
  }, []);

  function onReturn() {
    navigate("/");
  }

  return (
    <Container>
      <ContainerInformations>
        <ContainerReturn>
          <span onClick={onReturn}>
            <img src="/leftArrow.png" />
            <p>VOLTAR</p>
          </span>
          <a href={postInformations.html_url} target="_blank">
            <p>VER NO GITHUB</p>
          </a>
        </ContainerReturn>
        <span>{postInformations.title}</span>
        <ContainerSocial>
          <span>
            <img src="/github.png" alt="" />
            <p>{postInformations.user?.login}</p>
          </span>
          <span>
            <img src="/calendar.png" alt="" />
            <p>{formattedDate}</p>
          </span>
          <span>
            <img src="/comment.png" alt="" />
            <p>{postInformations.comments}Comentários</p>
          </span>
        </ContainerSocial>
      </ContainerInformations>
      <ContainerContent>
        <ReactMarkdown>{postInformations.body}</ReactMarkdown>
      </ContainerContent>
    </Container>
  );
}
