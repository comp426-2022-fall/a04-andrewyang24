#!/usr/bin/env node

import { roll } from './lib/roll.js';
import express from 'express';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.use(express.urlencoded({extended: true}));

//get root endpoint
app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
  });

//call a non-existing endpoint
app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND');
});

//roll default dice
app.get('/app/roll/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(roll(6, 2, 1));
});

//roll random dice
app.post('/app/roll/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(roll(parseInt(req.query.sides), parseInt(req.query.dice), parseInt(req.query.rolls)));
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

//setup server
app.listen(port);