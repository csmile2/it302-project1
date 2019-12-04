const express = require('express')
const app = express()
const path = require('path')
var cors = require('cors')
const PORT = process.env.PORT || 3000


const { Pool } = require('pg');
const pool = new Pool({
  connectionString: "postgres://tlvknrzizaltmb:70c83c69b4c57ee8bd209141b5b33708674fbc276ad368a2c8b3853caacf44f4@ec2-107-21-126-201.compute-1.amazonaws.com:5432/d4ha3rjrcjsc6a",
  ssl: true
});


express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .use(cors())
    .set('view engine', 'ejs')
    .get('/employees', async (req, res) => {
        try {
          const client = await pool.connect()
          const result = await client.query('SELECT * FROM employee');
          const results = (result) ? result.rows : [];
//           res.render('pages/db', results );
            res.json(results);
          client.release();
        } catch (err) {
          console.error(err);
          res.send("Error " + err);
        }
      })

    .get('/db', async (req, res) => {
        try {
          const client = await pool.connect()
          const result = await client.query('SELECT * FROM test_table');
          const results = { 'results': (result) ? result.rows : null};
          res.render('pages/db', results );
          client.release();
        } catch (err) {
          console.error(err);
          res.send("Error " + err);
        }
      })
    .listen(PORT, () => console.log(`Our app is running on port ${ PORT }`));

