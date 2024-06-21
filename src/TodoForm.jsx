import {ListItem} from "@mui/material";
import {TextField} from "@mui/material";
import { Create } from "@mui/icons-material";
import {InputAdornment} from "@mui/material";
import {IconButton} from "@mui/material";
import { useState } from "react";



export default function TodoForm({addTodo}){
    const [text, setText] = useState("");
    // verify if the state changes, and set the value of the state to what its inside the text box
    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    // prevents refreshing the page when submiting the form and adds a todo and then resets the input to empty
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return (

    <ListItem> 
        <form onSubmit={handleSubmit}>
        <TextField 
        id="outlined-basic" 
        label="Add a todo" 
        variant="outlined" 
        onChange={handleChange}
        value={text}
        InputProps={{
            endAdornment: <InputAdornment position="end">
            <IconButton
              aria-label="create todo"
              edge="end"
              type="submit">
              <Create/>
            </IconButton>
          </InputAdornment>
        }}/>
        </form>
    </ListItem>
)
}



