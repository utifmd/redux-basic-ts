import React from 'react';
import Article from "./components/Article"
import AddArticle from "./components/AddArticle"
import {addArticle, removeArticle} from "./store/actionCreators"
import {useSelector} from "react-redux";

function App() {
    const articles: IArticle[] = useSelector(((state: ArticleStateType) => state.articles))
    return (
        <div>
            <AddArticle addArticle={addArticle}/>
            {articles.map(mArticle =>
                <Article article={mArticle} key={mArticle.id} removeArticle={removeArticle}/>)}
        </div>
    )
}

export default App;
