import { NextFunction, Request, Response } from "express";

import logging from "../../config/logging";
import { Connect, Query } from "../../config/mysql";

const NAMESPACE = "doctor";

const updateDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "Updtating doctor.");

  interface IDoctor {
    NomeMed?: string;
    Genero?: string;
    Telefone?: string;
    Email?: string;
    CodEspec?: number;
  }

  const { name, gender, phone, email, codEspec } = req.body;

  const { codmed } = req.headers;

  // alterar apenas os dados informados no corpo da requisição
  const values: IDoctor = {
    NomeMed: name,
    Genero: gender,
    Telefone: phone,
    Email: email,
    CodEspec: codEspec,
  };

  let query = `UPDATE Medico SET `.toString();
  console.log(query);

  let update = "";

  Object.entries(values).forEach((item) => {
    if (item[1] !== undefined && item[0] === "NomeMed") {
      console.log(item);
      update += `${item[0]} = "${item[1]}" `;
    } else if (item[1] !== undefined && update === "") {
      update += ` ${item[0]} = "${item[1]}" `;
    } else if (item[1] !== undefined) {
      update += `, ${item[0]} = "${item[1]}" `;
    }
  });

  query += `${update} WHERE CodMed = "${codmed}"`;

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((result) => {
          logging.info(NAMESPACE, "Medico created: ", result);

          return res.status(200).json({
            result,
          });
        })
        .catch((error) => {
          logging.error(NAMESPACE, error.message, error);

          return res.status(200).json({
            message: error.message,
            error,
          });
        })
        .finally(() => {
          logging.info(NAMESPACE, "Closing connection.");
          connection.end();
        });
    })
    .catch((error) => {
      logging.error(NAMESPACE, error.message, error);

      return res.status(200).json({
        message: error.message,
        error,
      });
    });
};

export { updateDoctor };
