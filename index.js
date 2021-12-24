const express = require('express');
const chalk = require("chalk");
const fs = require("fs");
const config = require("./config.json");

const app = express();
app.config = config;

express.use(express.json());

const logger = async (req, res, next) => {
    console.log(`[${chalk.green(new Date().toISOString())}] [${req.ip}] ${chalk.blue(req.method)}  ${chalk.yellow(req.path)}`);
    next();
}

express.use(logger)

