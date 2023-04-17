import React from 'react';
import Article from "./components/Article"
import AddArticle from "./components/AddArticle"
import {addArticle, removeArticle} from "./store/actionCreators"
import {useSelector} from "react-redux";

function App() {
    const {articles, error, loading} = useSelector((state: ArticleStateType) => state)
    return (
        <div>
            {loading ? <span>Loading..</span> : null}
            {error ? <span style={{color: 'red'}}>{error.toString()}</span> : null}
            <AddArticle addArticle={addArticle}/>
            {articles.map(mArticle =>
                <Article article={mArticle} key={mArticle.id} removeArticle={removeArticle}/>)}
        </div>
    )
}

export default App;
