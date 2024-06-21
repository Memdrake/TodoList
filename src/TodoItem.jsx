import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';




export default function TodoItem({todo, removeTodo, toggle}){
    // this creates 1 item for the list, which will be looped over for each item on the array in the TodoList.jsx file
    const labelId = `checkbox-list-label-${todo.id}`;

                return (
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={todo.completed}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                          onChange={toggle}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={todo.text} />
                    </ListItemButton>
                  </ListItem>
                );
}