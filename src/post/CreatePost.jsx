import React, { useState } from "react";

export default function CreatePost({ user, posts, dispatch }) {
  const [title, setTitle] = useState("");
  const [conent, setContent] = useState("");

  function handleTitleChange(evt) {
    setTitle(evt.target.value);
  }

  function handleContentChange(evt) {
    setContent(evt.target.value);
  }

  function handleCreate() {
    dispatch({ type: "CREATE_POST", title, content, author: user });
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          name="create-title"
          id="create-title"
        />
      </div>
      <textarea value={conent} onChange={handleContentChange} />
      <input type="submit" value="Create" />
    </form>
  );
}
