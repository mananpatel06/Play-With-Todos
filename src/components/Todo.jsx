import { useRef, useState } from "react";


const Todo = ({todos,setTodos,setNewTodo}) => {
  const inputRef = useRef(null);
  const [checked, setChecked] = useState(false);

  const add = () => {
    if(inputRef.current.value){setTodos([
      ...todos,
      {
        desc: inputRef.current.value,
        tag: checked,
      },
    ]);}
    inputRef.current.value=""
    setNewTodo(false);
  };

  return (
    <div className="bg-zinc-900/90 text-white w-72 h-72 rounded-[40px]">
      <div className="flex flex-col items-center justify-center gap-2 ">
        <span className="font-medium text-[25px] pt-2 ">Add Todo</span>
        <textarea
        autoFocus
          ref={inputRef}
          name="text"
          cols="30"
          rows="20"
          placeholder="Add Your Task"
          className="rounded-lg outline-none  resize-none
         w-[230px]  h-[140px] pl-[5px] text-[20px] text-black"
        ></textarea>

{/* Checkbox */}
        <div className="flex gap-5 font-normal">
          <input
            value="test"
            type="checkbox"
            onChange={() => setChecked(!checked)}
          />
          <label className="text-[18px]">Important</label>
        </div>

        <button
          onClick={() => {
            add();
          }}
          className="bg-blue-600 rounded-full w-[100px] h-[40px] 
        hover:scale-110 transition ease-in-out"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Todo;
