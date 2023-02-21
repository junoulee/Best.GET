require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const jsonMiddleware = express.json();
// const ClientError = require('./client-error');
const pg = require('pg');
const app = express();

app.use(staticMiddleware);
app.use(jsonMiddleware);

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/products', (req, res, next) => {
  const sql = `
  select "product_id",
          "name",
          "manufacturer",
          "description",
          "price",
          "image_url",
          "category"
    from "products"
  `;
  db.query(sql)
    .then(result => {
      const products = result.rows;
      res.status(200).json(products);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
