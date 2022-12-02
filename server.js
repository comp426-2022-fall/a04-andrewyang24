#!/usr/bin/env node
import { roll } from './lib/roll.js';
import express from 'express';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const app = express();
const port = argv.port || 5000;

app.use(express.urlencoded({extended: true}));

//get root endpoint
app.get('/app/', (req, res) => {
    res.status(200).send('200 OK');
  });


app.get('/app/roll/', (req, res) => {
    const sides = 6;
    const dice = 2;
    const rolls = 1;
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(roll(sides, dice, rolls));
});