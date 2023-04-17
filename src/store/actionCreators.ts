import * as types from "./actionTypes"

export function addArticle(article: IArticle): DispatchArticleType {
    return async (dispatch: DispatchArticleType) => {
        try {
            const requestAction: ArticleActionType = {
                type: types.ADD_ARTICLE_REQUEST
            }
            dispatch(requestAction)
            const response = await httpClient(article)
            const doneAction: ArticleActionType = {
                type: types.ADD_ARTICLE_DONE, article: response
            }
            dispatch(doneAction)
        } catch (error) {
            const failedAction: ArticleActionType = {
                type: types.ADD_ARTICLE_FAILED, error
            }
            dispatch(failedAction)
        }
    }
}
export const removeArticle = (article: IArticle): DispatchArticleType =>
    async (dispatch: DispatchArticleType) => {
        try {
            const requestAction: ArticleActionType = {
                type: types.REMOVE_ARTICLE_REQUEST
            }
            dispatch(requestAction)
            const response = await httpClient(article)
            const doneAction: ArticleActionType = {
                type: types.REMOVE_ARTICLE_DONE, article: response
            }
            dispatch(doneAction)
        } catch (error) {
            const failedAction: ArticleActionType = {
                type: types.REMOVE_ARTICLE_FAILED, error
            }
            dispatch(failedAction)
        }
    }
function httpClient<T>(params: T): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            // reject({message: "Failed."})
            resolve(params)
        }, 3000)
    })
}
