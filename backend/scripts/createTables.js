const { Pool } = require('pg');
const config = require('../config/db');

const pool = new Pool(config);

const createTables = async () => {
  try {
    const client = await pool.connect();
    await client.query(`
    -- Create users table
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) NOT NULL,
      password VARCHAR(50) NOT NULL,
      region VARCHAR(50) NOT NULL,
      email VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    -- Create army table
CREATE TABLE army (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Create subfaction table
CREATE TABLE subfaction (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

-- Create grand_strategy table
CREATE TABLE grand_strategy (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(250) NOT NULL
);

-- Create match table
CREATE TABLE match (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  result VARCHAR(10)
);

-- Create player table
CREATE TABLE player (
  id SERIAL PRIMARY KEY,
  user_id SERIAL REFERENCES users(id),
  match_id SERIAL REFERENCES match(id),
  army_id SERIAL REFERENCES army(id),
  subfaction_id SERIAL REFERENCES subfaction(id),
  grand_strategy_id SERIAL REFERENCES grand_strategy(id),
  result VARCHAR(10)
);

-- Create round table
CREATE TABLE round (
  id SERIAL PRIMARY KEY,
  player_id SERIAL REFERENCES player(id),
  round_number INTEGER,
  battle_tactic VARCHAR(50) NOT NULL,
  battle_tactic_success BOOLEAN,
  points_earned INTEGER,
  objectives_held INTEGER
);

-- Create battle_tactic table
CREATE TABLE battle_tactic (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  description VARCHAR(250)
);

-- Create army_battle_tactic table
CREATE TABLE army_battle_tactic (
  id SERIAL PRIMARY KEY,
  army_id SERIAL REFERENCES army(id),
  battle_tactic_id SERIAL REFERENCES battle_tactic(id),
  name VARCHAR(50),
  description VARCHAR(250)
);
`);
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    pool.end();
  }
};

createTables();
