import React, { useEffect, useState } from "react"
import { Button, Container, Grid, TextField, Box, MenuItem, Stack } from '@mui/material'
import { ItemList } from "../components/ItemList"
import axios from "axios";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export const Home = () => {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState("");
  const [locations, setLocations] = useState("");
  const [participants, setParticipants] = useState([]);
  const [cards, setCards] = useState([]);

  const getApiData = () => {
    axios.get("https://crudcrud.com/api/6c5e9cd8e3fc4bb6b5e138265330cd32/register")
      .then((res) => {
        setCards(res.data);
      });
  };

  const addItem = (e) => {
    e.preventDefault();
    const obj = {
      title: title,
      date: date,
      description: description,
      locations: locations,
      participants: participants
    }
    axios.post("https://crudcrud.com/api/6c5e9cd8e3fc4bb6b5e138265330cd32/register", obj)
      .then(() => getApiData());
  };

  const deleteItem = (id) => {
    axios.delete(`https://crudcrud.com/api/6c5e9cd8e3fc4bb6b5e138265330cd32/register/${id}`)
      .then(() => getApiData());
  };

  const editItem = (newObj, id) => {
    axios.put(`https://crudcrud.com/api/6c5e9cd8e3fc4bb6b5e138265330cd32/register/${id}`, newObj)
      .then(() => getApiData());
  }

  const handleDateChange = (newValue) => {
    const formattedDate = dayjs(newValue).format('MM-DD-YYYY');
    setDate(formattedDate);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Container>
        <form onSubmit={addItem}>
          <Grid container mt={2} spacing={2} justifyContent="center">
            <Grid item xs={12} lg={12} my={3} textAlign="center">
              <h1>Holiday Plans</h1>
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField
                type="text"
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} lg={4} >
              <TextField
                type="text"
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} lg={4} >
              <TextField
                type="text"
                label="Locations"
                variant="outlined"
                value={locations}
                onChange={(e) => setLocations(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} lg={4} >
              <Box width="100%">
                <TextField
                  label="Participants"
                  select
                  value={participants}
                  onChange={(e) => setParticipants(e.target.value)}
                  fullWidth
                  required
                  SelectProps={{
                    multiple: true
                  }}
                >
                  <MenuItem value="Person01">Person01</MenuItem>
                  <MenuItem value="Person02">Person02</MenuItem>
                  <MenuItem value="Person03">Person03</MenuItem>
                  <MenuItem value="Person04">Person04</MenuItem>
                </TextField>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4} className="dateContainer">
              <Stack spacing={4} sx={{ width: '250px' }}>
                <DatePicker
                  label="Date"
                  value={dayjs(date)}
                  onChange={handleDateChange}
                  required
                />
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              display="flex"
              justifyContent="center"
            >
              <Button type="submit" variant="outlined">Register</Button>
            </Grid>
          </Grid>
          <Grid container mt={3} spacing={3} justifyContent="center">
            <Grid item xs={12} textAlign="center">
              <h2>Plans</h2>
            </Grid>
            {cards.map(card => (
              <Grid key={card._id} item xs={12} lg={4}>
                <ItemList card={card} deleteItem={deleteItem} editItem={editItem} />
              </Grid>
            ))}
          </Grid>
        </form>
      </Container>
    </>
  )
}