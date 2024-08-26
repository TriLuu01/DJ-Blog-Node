"use strict";

import mongoose from "mongoose";

//use of mongoose as a high level driver for mongodb
//provide schema-based structure and a layer of validation
const connectString = `mongodb://localhost:27017/DJBlog`;
import { countConnect } from "../helpers/check.connect.js";
//singleton pattern
//guarantee one connection only to the db => avoid race conditions

class Database {
  constructor() {
    this.connect();
  }
  //connect
  connect(type = "mongodb") {
    if (1 === 0) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectString)
      .then((_) => console.log(`Connected MongoDb Success`, countConnect()))
      .catch((err) => console.log(`Error Connect!`));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDb = Database.getInstance();

export default instanceMongoDb;
