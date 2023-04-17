import * as types from "./actionTypes"

export const initialState: ArticleStateType = {
    articles: []
}
function reducer(
    state: ArticleStateType = initialState,
    action: ArticleActionType): ArticleStateType {
    switch (action.type) {
        case types.ADD_ARTICLE:
            const mArticle = {
                ...action.article,
                id: state.articles.reduce((acc, current) => Math.max(acc, current.id), 0) +1
            }
            return { ...state,
                articles: state.articles.concat(mArticle)
            }
        case types.REMOVE_ARTICLE:
            return { ...state,
                articles: state.articles.filter(({id}) =>
                    id !== action.article.id
                )
            }
        default:
            return state
    }
}
export default reducer