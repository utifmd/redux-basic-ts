import {useCallback} from "react";
import {useDispatch} from "react-redux";

type Props = {
    article: IArticle,
    removeArticle: (article: IArticle) => DispatchArticleType
}
const Article = ({article, removeArticle}: Props) => {
    const dispatch: DispatchArticleType = useDispatch()
    const deleteArticle = useCallback(
        (article: IArticle) => dispatch(removeArticle(article)),
        [dispatch, removeArticle]
    );
    return(
        <div>
            <div>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
            </div>
            <button onClick={() => deleteArticle(article) }>discard</button>
        </div>
    )
}
export default Article