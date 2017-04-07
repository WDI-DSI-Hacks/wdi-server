DROP TABLE IF EXISTS profits;

-- create users table
CREATE TABLE profits(
  id SERIAL PRIMARY KEY,
  store INT NOT NULL,
  dept INT NOT NULL,
  week DATE NOT NULL,
  weekly_sales FLOAT NOT NULL,
  is_holiday BOOL NOT NULL
);

COPY profits(store,dept,week,weekly_sales,is_holiday)
FROM '/Users/digitalmediaflow/wdi-server/db/train.csv' DELIMITER ',' CSV HEADER;


