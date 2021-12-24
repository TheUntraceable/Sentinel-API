const express = require('express');
const chalk = require("chalk");
const fs = require("fs");
const config = require("./config.json");

const app = express();
app.config = config;

app.use(express.json());

const logger = async (req, res, next) => {
    console.log(`[${chalk.green(new Date().toISOString())}] [${req.ip}] ${chalk.blue(req.method)}  ${chalk.yellow(req.path)}`);
    next();
}

app.use(logger)

app.listen(app.config.port, () => {
    console.log(`[${chalk.green(new Date().toISOString())}] [${chalk.blue("SERVER")}] ${chalk.green(`Listening on port ${app.config.port}`)}`);
})