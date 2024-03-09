import React, { useEffect, useState } from "react"
import { Button, Container, Grid, TextField } from '@mui/material'
import { ItemList } from "../components/ItemList"
import axios from "axios";

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export const Home = () => {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState("");
  const [locations, setLocations] = useState("");
  const [participants, setParticipants] = useState("");

  const [cards, setCards] = useState([]);

  const getApiData = () => {
    axios.get("https://crudcrud.com/api/1a8090d5a4594fa083b301c5287e8fa7/register")
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
    axios.post("https://crudcrud.com/api/1a8090d5a4594fa083b301c5287e8fa7/register", obj);
    getApiData();
    getApiData();
  };

  const deleteItem = (id) => {
    axios.delete(`https://crudcrud.com/api/1a8090d5a4594fa083b301c5287e8fa7/register/${id}`)
    getApiData();
    getApiData();
  };

  const editItem = (newObj, id) => {
    axios.put(`https://crudcrud.com/api/1a8090d5a4594fa083b301c5287e8fa7/register/${id}`, newObj)
    getApiData();
    getApiData();
  }

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
              <TextField
                type="text"
                label="Participants"
                variant="outlined"
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date"
                  value={date}
                />
              </LocalizationProvider>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              display="flex"
              justifyContent="center"
            >
              <Button type="submit" variant="outlined">Cadastrar</Button>
            </Grid>
          </Grid>

          <Grid container mt={3} justifyContent="center">
            <Grid item xs={12} textAlign="center">
              <h2>Lista de cadastrados</h2>
            </Grid>

            {cards.map(card => (
              <Grid key={card._id} item xs={12} lg={8}>
                <ItemList card={card} deleteItem={deleteItem} editItem={editItem} />
              </Grid>
            ))}

          </Grid>
        </form>
      </Container>
    </>
  )
}