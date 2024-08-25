import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/736x/79/82/a7/7982a7931c4ed2634c7f6549a5c754c6.jpg'/>
            { props.message }
            <div>
                <span>like  {props.likesCount} </span>
            </div>
        </div>
    )
}


export default Post;