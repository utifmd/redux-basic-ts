interface IArticle {
    id: number,
    title: string,
    body: string
}
type ArticleStateType = {
    articles: IArticle[]
}
type ArticleActionType = {
    type: string,
    article: IArticle
}
type DispatchArticleType = (action: ArticleAction) => ArticleAction