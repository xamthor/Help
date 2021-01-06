import mongoose from "mongoose";
import { config } from "dotenv";
import validator from "validator";

config();

const statusSchema = new mongoose.Schema({

  user_id: {
    type: String,
  },
  content: {
    type: String,
  },
  timestamp:{
  	type: Date, 
  	default: Date.now
  }

});

const Status = mongoose.model("Status", statusSchema);

export default Status;
