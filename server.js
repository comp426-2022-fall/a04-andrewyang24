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