import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function EditDialog({ open, handleClose, editItem, card }) {

  const [newTitle, setNewTitle] = useState(card.title);
  const [newDate, setNewDate] = useState(card.date);
  const [newDescription, setNewDescription] = useState(card.description);
  const [newLocations, setNewLocations] = useState(card.locations);
  const [newParticipants, setNewParticipants] = useState(card.participants);

  const sendNewInfos = () => {
    const newObj = {
      title: newTitle,
      date: newDate,
      description: newDescription,
      locations: newLocations,
      participants: newParticipants
    }
    editItem(newObj, card._id);
    handleClose();
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edite as informações</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            type="text"
            fullWidth
            variant="standard"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Date"
            type="text"
            fullWidth
            variant="standard"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Location"
            type="text"
            fullWidth
            variant="standard"
            value={newLocations}
            onChange={(e) => setNewLocations(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Participants"
            type="text"
            fullWidth
            variant="standard"
            value={newParticipants}
            onChange={(e) => setNewParticipants(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={sendNewInfos}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}