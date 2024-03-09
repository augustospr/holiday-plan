import React, { useState } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from "@mui/material";
import EditDialog from "./Dialog";

export const ItemList = ({ card, deleteItem, editItem }) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <List sx={{ width: '100%', maxWidth: '100%' }}>
      <Paper>
        <ListItem sx={{ padding: '9px' }}
          secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={() => deleteItem(card._id)}>
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} onClick={handleClickOpen} dense >
            <ListItemText primary={`Nome: ` + card.nome} />
            <ListItemText primary={`Idade: ` + card.idade} />
            <ListItemText primary={`Email: ` + card.email} />
          </ListItemButton>

          <EditDialog open={open} handleClose={handleClose} editItem={editItem} card={card} />

        </ListItem>
      </Paper>
    </List>
  );
};