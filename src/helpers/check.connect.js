"use strict";

import mongoose from "mongoose";
import os from "os";
import process from "process";
const _SECONDS = 5000;
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections::${numConnection}`);
};

const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    //Example maximum number of connections based on number of cores

    const maxConnections = numCores * 5;
    console.log(`Memory used: ${memoryUsage / 1024 / 1024} MB`);
    console.log(`Active connections: ${numConnection}`);
    if (numConnection > maxConnections) {
      console.log(`Connection overload detected!`);
    }
  }, _SECONDS); // monitor every 5 secs
};
export { countConnect, checkOverLoad };
