import { ContainerInputSearch, ContainerSearchForm, ContentHeader } from "./styles";

export function SearchForm(){
    return(
        <ContainerSearchForm>
            <ContentHeader>
                <p>Publicações</p>
                <p>6 publicações</p>
            </ContentHeader>
            <ContainerInputSearch>
                <input type="text" placeholder="Buscar conteúdo"/>
            </ContainerInputSearch>
        </ContainerSearchForm>
    )
}