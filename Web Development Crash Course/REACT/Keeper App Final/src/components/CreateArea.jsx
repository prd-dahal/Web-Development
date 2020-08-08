import React from "react";

function CreateArea(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function contentChangeHandler(event) {
    setContent(event.target.value);
  }
  function clearContent() {
    setTitle("");
    setContent("");
  }
  function clickHandler(event) {
    event.preventDefault();
    props.addContent(title, content);
    clearContent();
  }
  return (
    <div>
      <form onSubmit={clickHandler}>
        <input
          onChange={titleChangeHandler}
          value={title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={contentChangeHandler}
          value={content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
