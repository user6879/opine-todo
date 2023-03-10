import { DB } from "../deps.ts";

interface todo {
  id: int;
  title: string;
  body: string;
}

const db = new DB("todo.db");
db.execute(`
    CREATE TABLE IF NOT EXISTS todo(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        body TEXT
    );
`);
db.close();

function addTODO(title, body) {
  const db = new DB("todo.db");
  try {
    db.query(`INSERT INTO todo(title, body) VALUES(?,?)`, [
      title,
      body,
    ]);
  } catch (e) {
    console.log(e);
  }
}

function getAll() {
  const db = new DB("todo.db");

  let data = db.query("SELECT * FROM todo");

  let json = [];

  for (const [id, title, body] of data) {
    json.push({
      "id": id,
      "title": title,
      "body": body,
    });
  }

  return json;
}

function getOne(id): todo {
  const db = new DB("todo.db");

  let data = db.query("SELECT * FROM todo WHERE id = ?", [id]);
  const json = [];

  for (const [id, title, body] of data) {
    json.push({
      "id": id,
      "title": title,
      "body": body,
    });
  }
  return json[0];
}

function deleteTODO(id) {
  const db = new DB("todo.db");

  let data = db.query("DELETE FROM todo WHERE id = ?", [id]);

  return data;
}

function updateTODO(id, title, body) {
  const db = new DB("todo.db");

  let data = db.query(
    `
    UPDATE todo 
    SET title = ?,
        body = ? 
        WHERE id = ?`,
    [
      title,
      body,
      id,
    ],
  );

  return data;
}

export { addTODO, deleteTODO, getAll, getOne, updateTODO };
