"use client";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { app } from "@/lib/firestore";
import { getFirestore } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";
import { time } from "console";

export default function TodoList() {
  const db = getFirestore(app);

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const todoCol = collection(db, "todos");
      const todoSnapshot = await getDocs(todoCol);
      const todos = todoSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todos);
    };

    fetchData();
  }, []);

  const addTodo = async () => {
    const todoRef = collection(db, "todos");

    const docRef = await addDoc(todoRef, {
      text: newTodo,
      test: Date.now(),
      anotherValue: "React is fun"
    });

    setTodos([...todos, { id: docRef.id, text: newTodo }]);
    setNewTodo("");
  };
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <div className="p-8 bg-white rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-center">Todo List</h2>
        <div className="flex items-center">
          <input
            className="border border-gray-300 p-2 flex-grow mr-2 rounded"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>
        <ul className="mt-4 space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="border p-2 rounded flex justify-between items-center"
            >
              <span>{todo.text}</span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
