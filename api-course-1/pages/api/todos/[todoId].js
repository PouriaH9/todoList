import { todos } from "../../../data/todos";

export default function handler(req, res) {
  const { todoId } = req.query;

  if (req.method === "DELETE") {
    const index = todos.findIndex((todo) => todo.id === parseInt(todoId));
    todos.splice(index, 1);
    return res.status(200).json({ message: "todo deleted !", todos });
  }
  return res.status(200).json({ todos });
}
