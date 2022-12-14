#!/usr/bin/env node

//import dependencies
import { roll } from './lib/roll.js';
import express from 'express';
import minimist from 'minimist';

//setup
const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.use(express.urlencoded({extended: true}));

//get root endpoint
app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
  });

//roll default dice
app.get('/app/roll/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(roll(6, 2, 1));
});

//roll random dice
app.post('/app/roll/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)));
})

//roll dice with sides
app.get('/app/roll/:sides/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(roll(parseInt(req.params.sides), 2, 1));
})

//roll dice with sides and dice
app.get('/app/roll/:sides/:dice/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
})

//roll dice with all params
app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
})

//call a non-existing endpoint
app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
});

//setup server
app.listen(port);