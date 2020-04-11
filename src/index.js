import getTweetsAndRetweet from "./getTweetsAndRetweet.js";
import Bot from "./Bot.js";

console.log("[BOT]: Iniciando...");

const BotInit = async () => {
  const query = {
    q: "djonga -RT OR Djonga -RT",
    result_type: "recent",
    count: 10,
  };

  await Bot.get("search/tweets", query, getTweetsAndRetweet);
};

setInterval(BotInit, 30 * 60 * 1000);
BotInit();
