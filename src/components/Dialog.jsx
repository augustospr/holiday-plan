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
        <DialogTitle>Edit the information</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
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
          <Stack spacing={4} sx={{ width: '250px', mt: 2 }}>
            <DatePicker
              label="Date"
              value={dayjs(newDate)}
              onChange={handleDateChange}
            />
          </Stack>
          <TextField
            autoFocus
            sx={{ mt: 2 }}
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
            sx={{ mt: 2 }}
            select
            value={newParticipants}
            onChange={(e) => setNewParticipants(e.target.value)}
            fullWidth
            SelectProps={{
              multiple: true
            }}
          >
            <MenuItem value="Person01">Person01</MenuItem>
            <MenuItem value="Person02">Person02</MenuItem>
            <MenuItem value="Person03">Person03</MenuItem>
            <MenuItem value="Person04">Person04</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={sendNewInfos}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}