import Bot from "./Bot.js";
import logAction from "./logAction.js";

export default function getTweetsAndRetweet(err, data, response) {
  if (err) {
    console.log("Bot not could find latest tweet. : ", err);
  } else {
    data.statuses.map((tweet) => {
      Bot.post(
        "statuses/retweet/:id",
        { id: tweet.id_str },
        logAction({ err, action_name: "Retweet", id_str: tweet.id_str })
      );
      Bot.post("favorites/create", { id: tweet.id_str }, (err) =>
        logAction({ err, action_name: "Like", id_str: tweet.id_str })
      );
      Bot.post(
        "statuses/update",
        {
          status: `@${tweet.user.screen_name} Amém.`,
          in_reply_to_status_id: tweet.id_str,
        },
        (err) => logAction({ err, action_name: "Reply", id_str: tweet.id_str })
      );
    });
  }
}
