import React from 'react';
import './Post.css';

const post = (props) => (
    <div class="post">
        <div>
            <h2>{props.title}</h2>
            <div >{props.body}</div>
        </div>
    </div>
);

export default post;