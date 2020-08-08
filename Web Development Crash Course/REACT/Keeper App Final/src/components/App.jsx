import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [contents, changeContents] = React.useState([
    {
      title: "Test",
      content: "Test one"
    }
  ]);
  function addContent(title, content) {
    changeContents((prevValue) => {
      return [...prevValue, { title: title, content: content }];
    });
  }
  function deleteContent(id) {
    changeContents(function (prevValue) {
      return prevValue.filter((content, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addContent={addContent} />
      {contents.map(function (content, index) {
        return (
          <Note
            key={index}
            id={index}
            delete={deleteContent}
            title={content.title}
            content={content.content}
          />
          
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
