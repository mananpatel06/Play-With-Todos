import { useRef, useState } from "react";

const EditTodo = ({ id, todos, setTodos, setEdit }) => {
  const inputRef = useRef(null);

  const [tic, setTic] = useState(todos[id].tag);

  const add = () => {
    todos[id].desc = inputRef.current.value;
    todos[id].tag = tic,
    setTodos(todos.filter((todo) => todo.desc !== ""));
    localStorage.setItem("todos", JSON.stringify(todos));
    setEdit(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-5">
      <textarea
        ref={inputRef}
        name="text"
        defaultValue= {todos[id].desc}
        cols="30"
        rows="20"
        placeholder="Add Your Task"
        className="rounded-lg outline-none resize-none
        w-[230px] h-[140px] pl-[5px] text-[20px] text-black"
      >
      </textarea>

      <div className="flex gap-5 font-normal">
        
          <input
            value="test"
            checked={tic}
            onChange={() => setTic(!tic)}
            type="checkbox"
          />
        
        <label className="text-[18px]">Important</label>
      </div>

      <button
        onClick={() => {
          add();
        }}
        className="bg-blue-600 rounded-full w-[100px] h-[40px] 
        hover:scale-110 transition ease-in-out font-normal"
      >
        Save
      </button>
    </div>
  );
};

export default EditTodo;
