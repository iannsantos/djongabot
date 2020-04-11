import Twit from "twit";
import dotenv from "dotenv";

dotenv.config();

const {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
} = process.env;

const Bot = new Twit({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token: ACCESS_TOKEN,
  access_token_secret: ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

export default Bot;
