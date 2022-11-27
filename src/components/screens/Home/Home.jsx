import React, {useState} from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = [
    {
        _id: 'numba1',
        title: 'Lorem ipsum dolor sit amet',
        isCompleted: false,
    },
    {
        _id: 'numba2',
        title: 'Lorem ipsum dolor sit amet',
        isCompleted: false,
    },
    {
        _id: 'numba3',
        title: 'Lorem ipsum dolor sit amet',
        isCompleted: false,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)
    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }
    const removeTodo = (id) =>
        setTodos([...todos].filter(t => t._id !== id))


    return (
        <div className={"text-white w-4/5 mx-auto"}>
            <h1 className={'text-2xl font-bold text-center mb-4'}>Your personal To-Do List</h1>
            {todos.map(todo => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}
            <CreateTodoField setTodos={setTodos}/>
        </div>
    )
}
export default Home