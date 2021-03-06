import express from 'express';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileAsync';
import cors from 'cors';

import { createAPI } from './routes';

const adapter = new FileSync('db.json');
const dbJSON = low(adapter);

dbJSON.then((db) => {

  const app = express();
  const port = 3010;

  app.use(cors());
  app.use(express.json());

  Object.keys(db.getState()).forEach((resourceName) => {
    app.use(createAPI(resourceName, db));
  });

  app.listen(port, () => {
    console.log(`REST API Listening on Port: ${port}`);
  });

});
