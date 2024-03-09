import React, { useEffect, useState } from "react"
import { Button, Container, Grid, TextField } from '@mui/material'
import { ItemList } from "../components/ItemList"
import axios from "axios";

export const Home = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [cards, setCards] = useState([]);

  const getApiData = () => {
    axios.get("https://crudcrud.com/api/99185669ebc64472bd0da74feaba959c/register")
      .then((res) => {
        setCards(res.data);
      });
  };

  const addItem = (e) => {
    e.preventDefault();
    const obj = {
      nome: name,
      idade: age,
      email: email
    }
    axios.post("https://crudcrud.com/api/99185669ebc64472bd0da74feaba959c/register", obj);
    getApiData();
    getApiData();
  };

  const deleteItem = (id) => {
    axios.delete(`https://crudcrud.com/api/99185669ebc64472bd0da74feaba959c/register/${id}`)
    getApiData();
    getApiData();
  };

  const editItem = (newObj, id) => {
    axios.put(`https://crudcrud.com/api/99185669ebc64472bd0da74feaba959c/register/${id}`, newObj)
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
            <Grid item xs={12} lg={3}>
              <TextField
                type="text"
                label="Nome"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <TextField
                type="number"
                label="Idade"
                variant="outlined"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} lg={3} >
              <TextField
                type="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />
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