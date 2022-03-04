const Pg = require('pg');

const pool = new Pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'app',
  password: '',
  port: 5432,
});

const allColors = async () => {
  const result = await pool.query('select * from colors');
  console.log(result.rows);
};

const oneColor = async (colorId) => {
  const result = await pool
    .query('select * from colors where color_id = $1', [colorId]);
  console.log(result.rows);
};

const insertColor = async (color) => {

  const sql = `insert into colors (color_name, hexcode)
               values ($1, $2)`;

  await pool.query(sql, [color.name, color.hexcode]);
};

// allColors();
insertColor({ name: 'yellow', hexcode: '00FFFF'});
