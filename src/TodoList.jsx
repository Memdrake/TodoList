import List from '@mui/material/List';
import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box } from '@mui/material';

const getInitialData = () => {
   const data = JSON.parse(localStorage.getItem("todos"));
   if(!data) return [];
   return data;
}

export default function TodoList(){


    const [todos, setTodos] = useState(getInitialData);
    // lets us locally storage the todo list information
    useEffect(() => {
        localStorage.setItem(
            'todos',
            JSON.stringify(todos)
)
    }, [todos])

    // removes one item from the list
    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter((t) => t.id !== id);
        })
    }
    // toggles the checkbox of an item from the list
    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            // returns all the todo.id exept the todo we tried to toggle, and then it toggles the checkbox
            return prevTodos.map(todo => {
                if(todo.id === id) {
                    return {...todo, completed: !todo.completed}
                
                } else {
                    return todo;
                }
            })
        })
    }

    // adds a todo to the setTodo array
    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, {text: text, id: crypto.randomUUID(), completed: false}];
        })
    }
    // returns the todo list
    return (
        
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: "column",
            alignItems: "Center",
            m: 3
        }}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {          
               return <TodoItem 
                todo={todo} 
                key={todo.id} 
                removeTodo={() => removeTodo(todo.id)}
                toggle={() => toggleTodo(todo.id)}/>;
            })}
            <TodoForm addTodo={addTodo}/>
        </List>
        </Box>
    )
}




