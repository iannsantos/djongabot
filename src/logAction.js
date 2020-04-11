export default function logAction({ err, action_name, id_str }) {
  if (err) {
    console.log(`[BOT]: ${action_name} failed => ${err} (${id_str})`);
  } else {
    console.log(`[BOT]: ${action_name} success => ${id_str}`);
  }
}
