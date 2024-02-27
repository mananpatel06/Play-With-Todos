/* eslint-disable react/prop-types */

import { FaRegFileAlt } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import EditTodo from "./EditTodo";

const Card = ({ data, reference, id, todos, setTodos }) => {
  const [edit, setEdit] = useState(false);

  const deleteTodo = () => {
    let text = "Do you want to delete this todo ?";
    if (confirm(text) == true) {
      // console.log("yes")
      // let d = JSON.parse(localStorage.getItem("todos"));
      // console.log("desc = ",d[id].desc)

      todos[id].desc = "";
      setTodos(todos.filter((todo) => todo.desc !== ""));
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  return (

    // using framer motion here

    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
      className="relative w-72 h-72 rounded-[40px] flex-shrink-0
       bg-zinc-900/90 text-white px-8 py-5 overflow-hidden"
    >
      <FaRegFileAlt />


      {/* edit desc text */}
      {edit && <EditTodo id={id} todos={todos} setTodos={setTodos} setEdit={setEdit} />}

      {/* desc will not show if edit is open */}
      {!edit && (
          <>
        <p className="w-[230px] h-[120px] overflow-hidden text-[22px]
        hover:overflow-y-scroll leading-tight mt-5 font-normal">{data.desc}</p>
     

      <div className="footer absolute bottom-0 w-full left-0 ">
        {/* button will not show if edit is open */}
        
            <div className="flex items-center justify-between mb-1 pb-3 px-8">
              {/* Delete button */}
              <span
                onClick={() => deleteTodo()}
                className="w-[30px] h-[30px] bg-zinc-600 rounded-full cursor-pointer 
           flex items-center justify-center hover:-translate-y-1 transition ease-in-out"
              >
                <MdDeleteOutline size="1.5em" />
              </span>

              {/* Edit button */}
              <span
                onClick={() => {
                  setEdit(!edit);
                }}
                className="w-[30px] h-[30px] bg-zinc-600 rounded-full cursor-pointer 
           flex items-center justify-center hover:-translate-y-1 transition ease-in-out"
              >
                <FaEdit size="1.1em" />
              </span>
            </div>
        
        {data.tag && (
          <div
            className={`tag w-full py-3 bg-red-500 flex items-center justify-center`}
          >
            <h3 className="text-[18px] font-normal ">Important</h3>
          </div>
        )}
      </div>
      </>
        )}

    </motion.div>
  );
};

export default Card;
