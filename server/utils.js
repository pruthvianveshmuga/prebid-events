const { sql } = require("./db");

const insertEvent = async ({ type, data }) => {
  const event = await sql`
    insert into events
      (type, data)
    values
      (${type}, ${data})
    returning id, type, data
  `;
  return event;
};

module.exports = { insertEvent };
