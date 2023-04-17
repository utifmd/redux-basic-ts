import * as types from "./actionTypes"

export function addArticle(article: IArticle): DispatchArticleType {
    const action: ArticleActionType = {
        article, type: types.ADD_ARTICLE
    }
    return httpRequest(action)
}
export function removeArticle(article: IArticle): DispatchArticleType {
    const action: ArticleActionType = {
        article, type: types.REMOVE_ARTICLE
    }
    return httpRequest(action)
}
export function httpRequest(action: ArticleActionType) {
    return (dispatch: DispatchArticleType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}