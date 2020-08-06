import React from 'react'

let title="This is title"
let content = "This is content"
function Note(){
    return (
        <div class='note'>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Note