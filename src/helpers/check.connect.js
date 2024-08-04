"use strict";

import mongoose from "mongoose";

const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections::${numConnection}`);
};

export default countConnect;
