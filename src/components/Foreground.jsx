import { useRef, useState } from "react";
import Card from "./Card";
import { FaPlus } from "react-icons/fa";
import Todo from "./Todo";
import { useEffect } from "react";

const Foreground = () => {
  const [newTodo, setNewTodo] = useState(false);

  const ref = useRef(null);

  let [todos, setTodos] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("todos")) || [{ desc: "Demo", tag: true }]
    );
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  let data = todos;

  return (
    <>
      <div
        ref={ref}
        className=" z-[3] w-full min-h-screen flex gap-5 p-10 
        flex-wrap max-md:flex max-md:flex-wrap max-md:p-2 "
      >
        {data.map((iteam, index) => (
          <Card
            data={iteam}
            todos={todos}
            setTodos={setTodos}
            reference={ref}
            key={index}
            id={index}
          />
        ))}

        {/* Add new todo */}

        {newTodo && (
          <div className="z-[5]">
            <Todo todos={todos} setTodos={setTodos} setNewTodo={setNewTodo} />
          </div>
        )}
      </div>

      {/* add notte button */}
      <div
        onClick={() => {
          setNewTodo(!newTodo);
        }}
        className="rounded-full cursor-pointer fixed z-[5] hover:scale-110 transition ease-in-out
        bottom-5 right-5 flex items-center justify-center gap-1 bg-blue-600 h-[50px] w-[100px] "
      >
        <button>
          <FaPlus color="#fff" />
        </button>
        <p className="text-white">Add Todo</p>
      </div>
    </>
  );
};

export default Foreground;
