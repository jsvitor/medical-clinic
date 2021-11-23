import mysql from "mysql2";

import config from "./config";

const params = {
  user: config.mysql.user,
  password: config.mysql.pass,
  host: config.mysql.host,
  database: config.mysql.database,
};

const Connect = async () =>
  new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params);

    connection.connect((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(connection);
    });
  });

const Query = async (connection: mysql.Connection, query: string) =>
  new Promise((resolve, reject) => {
    connection.query(query, connection, (error, result) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(result);
    });
  });

const Update = async (
  connection: mysql.Connection,
  query: string,
  values: Array
) =>
  new Promise((resolve, reject) => {
    connection.query(query, values, (error, result) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(result);
    });
  });

export { Connect, Query, Update };
