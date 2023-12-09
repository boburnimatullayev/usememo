import { useCallback, useMemo, useState } from "react";

import List1 from "./component/List1";
import LIst2 from "./component/LIst2";

function App() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState();

  const addTodo = () => {
    setTodo((e) => [...e, title]);
    setTitle(``)
  };

  const list1 = useMemo(() => {
    return todo;

  }, [todo]);

  const list2 = useCallback(() => {
    return todo;

  }, [todo]);


  console.log(`parent`);
  return (
    <div className="App">
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <button onClick={addTodo}>add</button>

      <List1 list1={list1} />
      <LIst2 list2={list2} />
    </div>
  );
}

export default App;
