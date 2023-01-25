import { DB } from "../deps.ts";

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

function getOne(id) {
  const db = new DB("todo.db");
  
    let data = db.query("SELECT * FROM todo WHERE id = ?",[id]);
    const json = [];

    for(const [id, title, body] of data){
        json.push({
            "id": id,
            "title": title,
            "body": body,
        })
    }
    return json[0];
  
}


export { addTODO, getAll, getOne };
