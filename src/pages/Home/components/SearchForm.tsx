import { useState } from "react";
import {
  ContainerInputSearch,
  ContainerSearchForm,
  ContentHeader,
} from "./styles";

interface SearchFormProps {
  getUserIssues: (query?: string) => void;
  postLength: number;
}

export function SearchForm({ getUserIssues, postLength }: SearchFormProps) {
  const [query, setQuery] = useState("");

  function onChangeQuery(e: string) {
    setQuery(e);
    getUserIssues(e);
  }

  return (
    <ContainerSearchForm>
      <ContentHeader>
        <p>Publicações</p>
        <p>{postLength} publicações</p>
      </ContentHeader>
      <ContainerInputSearch>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onBlur={(e) => onChangeQuery(e.target.value)}
        />
      </ContainerInputSearch>
    </ContainerSearchForm>
  );
}
