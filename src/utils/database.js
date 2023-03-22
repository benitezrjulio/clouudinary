const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const connect = async () => {
  mongoose.set("strictQuery", true);
  try {
    const database = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const { name, host } = database.connection;
    console.log(`Connected to ${name} DB in host : ${host}`);
  } catch (error) {
    console.log(`He tenido un erorr al conectar con mi BBDD ${error}`);
  }
};

module.exports = { connect };