import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function EditDialog({ open, handleClose, editItem, card }) {

  const [newName, setNewName] = useState(card.nome);
  const [newAge, setNewAge] = useState(card.idade);
  const [newEmail, setNewEmail] = useState(card.email);

  const sendNewInfos = () => {
    const newObj = {
      nome: newName,
      idade: newAge,
      email: newEmail
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
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Idade"
            type="number"
            fullWidth
            variant="standard"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
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