import React, { useState } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Paper } from "@mui/material";
import EditDialog from "./Dialog";
import { usePDF } from 'react-to-pdf';

export const ItemList = ({ card, deleteItem, editItem }) => {

  const { toPDF, targetRef } = usePDF({ filename: card._id + '.pdf' });

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
            <div ref={targetRef}>
              <ListItemText primary={`Title: ` + card.title} sx={{ mb: 1 }} />
              <ListItemText primary={`Date: ` + card.date} sx={{ mb: 1 }} />
              <ListItemText primary={`Description: ` + card.description} sx={{ mb: 1 }} />
              <ListItemText primary={`Location: ` + card.locations} sx={{ mb: 1 }} />
              <ListItemText primary={`Participants: ` + card.participants} sx={{ mb: 1 }} />
            </div>
            <Button variant="outlined" onClick={(e) => {toPDF(); e.stopPropagation()}} sx={{ mt: 2 }}>PDF Generator</Button>
          </ListItemButton>

          <EditDialog open={open} handleClose={handleClose} editItem={editItem} card={card} />

        </ListItem>
      </Paper>
    </List>
  );
};