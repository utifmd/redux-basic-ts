interface IArticle {
    id: number,
    title: string,
    body: string
}
type ArticleStateType = {
    articles: IArticle[],
    loading: boolean,
    error?: string | unknown
}
type ArticleActionType = {
    type: string,
    article?: IArticle,
    error?: string | unknown
}
type DispatchArticleType = (action: ArticleAction) => ArticleAction
