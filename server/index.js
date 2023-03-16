require('dotenv/config');
const argon2 = require('argon2');
const express = require('express');
const path = require('path');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const jsonMiddleware = express.json();
const ClientError = require('./client-error');
const pg = require('pg');
const app = express();

app.use(express.json());
app.use(staticMiddleware);
app.use(jsonMiddleware);
app.use(errorMiddleware);

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/products', (req, res, next) => {
  const searchTerm = req.query.search;
  let sql = `
  select "productId",
          "name",
          "manufacturer",
          "description",
          "price",
          "imageUrl",
          "category"
    from "products"
  `;
  if (searchTerm) {
    sql += `WHERE (name ILIKE '%${searchTerm}%' OR description ILIKE '%${searchTerm}%') AND (name ILIKE '%${searchTerm}%' OR category ILIKE '%${searchTerm}%')`;
  }

  db.query(sql)
    .then((result) => {
      const products = result.rows;
      res.status(200).json(products);
    })
    .catch((err) => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const sql = `
    select"productId",
          "name",
          "manufacturer",
          "description",
          "price",
          "imageUrl",
          "category"
    from "products"
    where "productId" = $1
  `;
  const params = [Number(req.params.productId)];
  db.query(sql, params)
    .then((result) => {
      const product = result.rows[0];
      if (!product) {
        throw new ClientError(404, 'Product cannot be found');
      }
      res.status(200).json(product);
    })
    .catch((err) => next(err));
});

app.post('/api/login', (req, res, next) => {
  const { email, password } = req.body;
  // console.log('email:', email);
  // console.log('password:', password);
  if (!email || !password) {
    throw new ClientError(400, 'email and password are required fields');
  }

  argon2
    .hash(password)
    .then((hashedPassword) => {

      const sql = `
INSERT INTO "users" ("email", "hashedPassword", "created_at")
VALUES ($1, $2, NOW())
  returning *
  `;
      const params = [email, hashedPassword];
      db.query(sql, params)
        .then((result) => {
          const [newUser] = result.rows;
          res.status(201).json(newUser);
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
