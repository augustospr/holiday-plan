import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { MenuItem, Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

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

  const handleDateChange = (newValue) => {
    const formattedDate = dayjs(newValue).format('MM-DD-YYYY');
    setNewDate(formattedDate);
  };

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
          <Stack spacing={4} sx={{ width: '250px' }}>
            <DatePicker
              label="Date"
              value={dayjs(newDate)}
              onChange={handleDateChange}
            />
          </Stack>
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
            label="Participants"
            select
            value={newParticipants}
            onChange={(e) => setNewParticipants(e.target.value)}
            fullWidth
            SelectProps={{
              multiple: true
            }}
          >
            <MenuItem value="Pessoa01">Pessoa01</MenuItem>
            <MenuItem value="Pessoa02">Pessoa02</MenuItem>
            <MenuItem value="Pessoa03">Pessoa03</MenuItem>
            <MenuItem value="Pessoa04">Pessoa04</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={sendNewInfos}>Editar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}