import { useEffect, useState } from "react";
import { ContainerInformation } from "../../components/ContainerInformation/ContainerInformation";
import { ContainerPost } from "../../components/ContainerPost/ContainerPost";
import { api } from "../../services/api";
import { SearchForm } from "./components/SearchForm";
import { Container, ContainerPostGroup } from "./styles";

interface IssuesProps {
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

export function Home() {
  const [posts, setPosts] = useState<IssuesProps[]>([]);

  async function getUserIssues(query: string = "") {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:Flaviojcf/github-blog`
    );

    setPosts(response.data.items);
    console.log(posts)
  }

  useEffect(() => {
    getUserIssues();
  }, []);

  return (
    <Container>
      <ContainerInformation />
      <SearchForm getUserIssues={getUserIssues} postLength= {posts.length}/>

      <ContainerPostGroup>
        {posts.map((post) => (
          <ContainerPost key={post.number} post={post}  />
        ))}
      </ContainerPostGroup>
    </Container>
  );
}
