import { useState } from 'react';

function App() {
  const [content, setContent] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  function showContent (e){
    setContent(e.target.value)
  }

  function makeList(e){
    e.preventDefault();
    setTodoArr([...todoArr, content]);
    setContent("");
  }

  function deleteList(index){
    setTodoArr(todoArr.filter((item, i) => i !== index));
  }

  return (<>
    <h1>TodoList</h1>
    <form onSubmit={makeList}>
      <input type="text" placeholder='here' value={content} onChange={showContent}></input>
      <input type="submit"></input>
    </form>
    <ul>
      {todoArr.map((item, i) => {
        return<>
        <li>{item}</li> <button onClick={() => deleteList(i) }>Click</button></>
      })}
    </ul>
  </>);
}

export default App;
