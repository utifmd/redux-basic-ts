import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";

type Props = {
    addArticle: (article: IArticle) => DispatchArticleType
}
const AddArticle = ({addArticle}: Props) => {
    const [article, setArticle] = useState<IArticle | {}>()
    const dispatch: DispatchArticleType = useDispatch()
    const saveArticle = useCallback(
        (article: IArticle) => dispatch(addArticle(article)),
        [dispatch, addArticle]
    )
    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {id, value} = e.currentTarget
        setArticle({...article, [id]: value})
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (article === undefined) return
        console.log("ComponentTAG", article)
        saveArticle(article as IArticle)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input id="title" placeholder="Enter Title" type="text" onChange={handleOnChange}/>
            <input id="body" placeholder="Enter Body" type="text" onChange={handleOnChange}/>
            <button disabled={article === undefined}>save</button>
        </form>
    )
}
export default AddArticle