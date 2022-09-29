import { relativeDateFormatter } from "../../utils/dateFormatter";
import { Container } from "./styles";

export interface IssuesProps {
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
interface PostProps {
  post: IssuesProps;
 
}

export function ContainerPost({ post }: PostProps) {
  const dateFormatted = relativeDateFormatter(post.created_at);
  return (
    <Container>
      <header>
        <p>{post.title}</p>
        <span>{dateFormatted}</span>
      </header>
      <span>{post.body}</span>
    </Container>
  );
}
