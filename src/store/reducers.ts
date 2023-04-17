import * as types from "./actionTypes"

export const initialState: ArticleStateType = {
    loading: false,
    articles: []
}
function reducer(
    state: ArticleStateType = initialState,
    action: ArticleActionType): ArticleStateType {
    switch (action.type) {
        case types.ADD_ARTICLE_REQUEST:
            return {
                articles: state.articles, loading: true
            }
        case types.ADD_ARTICLE_FAILED:
            return {
                articles: state.articles, error: action.error, loading: false
            }
        case types.ADD_ARTICLE_DONE:
            const mArticle: IArticle = {
                title: action.article?.title ?? "Empty",
                body: action.article?.body ?? "Empty",
                id: state.articles.reduce((acc, current) => Math.max(acc, current.id), 0) +1
            }
            return { ...state, loading: false,
                articles: state.articles.concat(mArticle)
            }

        case types.REMOVE_ARTICLE_REQUEST:
            return {
                articles: state.articles, loading: true
            }
        case types.REMOVE_ARTICLE_FAILED:
            return {
                articles: state.articles, error: action.error, loading: false
            }
        case types.REMOVE_ARTICLE_DONE:
            return { ...state, loading: false,
                articles: state.articles.filter(({id}) =>
                    id !== action.article?.id
                )
            }
        default:
            return state
    }
}
export default reducer