import axios from "axios";
import { useEffect, useState } from "react";
import TodoList from "../components/todos/todoList";
import TodoForm from "../components/todos/AddNewTodo";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const deleteTodo = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then(({ data }) => {
        console.log(data);
        setData(data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const addTodo = (e, formData) => {
    e.preventDefault();
    console.log(formData);
    // axios
    //   .post(`/api/todos/`, { todo })
    //   .then(({ data }) => {
    //     console.log(data);
    //     setData(data.todos);
    //     setLoading(false);
    //   })
    //   .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("/api/todos")
      .then((res) => {
        setData(res.data.todos);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return <div>loading ...</div>;

  return (
    <div className="bg-stone-900 h-screen font-serif w-screen ">
      <nav className=" ml-auto mr-auto w-1/2 text-center text-2xl p-4 border-b-4 border-b-indigo-500 ">
        <h1 className="text-white">to do list using Next.js & Tailwind </h1>
      </nav>
      <section className="w-full h-full flex flex-row">
        {/* todoForm */}
        <div className="w-1/2">
          <TodoForm onAdd={addTodo} />
        </div>
        {/* end of todoForm */}
        {/* TodoList */}
        <div className="w-1/2 ">
          <TodoList data={data} onDelete={deleteTodo} />
        </div>
        {/* end of TodoList */}
      </section>
    </div>
  );
}
