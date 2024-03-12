import React, { useState } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Paper } from "@mui/material";
import EditDialog from "./Dialog";
// import jsPDF from 'jspdf';

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
          <ListItemButton role={undefined} onClick={handleClickOpen} dense sx={{ display: 'flex', flexWrap: 'wrap' }} >
            <ListItemText primary={`Title: ` + card.title} />
            <ListItemText primary={`Date: ` + card.date} />
            <ListItemText primary={`Description: ` + card.description} />
            <ListItemText primary={`Location: ` + card.locations} />
            <ListItemText primary={`Participants: ` + card.participants} />
            <Button variant="outlined" sx={{ mt: 2 }}>Gerar PDF</Button>
          </ListItemButton>

          <EditDialog open={open} handleClose={handleClose} editItem={editItem} card={card} />

        </ListItem>
      </Paper>
    </List>
  );
};