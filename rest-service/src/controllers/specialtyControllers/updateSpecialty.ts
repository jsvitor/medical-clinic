import { NextFunction, Request, Response } from "express";

import logging from "../../config/logging";
import { Connect, Query } from "../../config/mysql";

const NAMESPACE = "specialty";

const updateSpecialty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "Updtating specialty.");

  interface ISpecialty {
    NomeEspec?: string;
    Descricao?: string;
  }

  const { name, description } = req.body;

  const { codespec } = req.headers;

  // alterar apenas os dados informados no corpo da requisição
  const values: ISpecialty = {
    NomeEspec: name,
    Descricao: description,
  };

  let query = `UPDATE Especialidade SET `.toString();
  console.log(query);

  let update = "";

  Object.entries(values).forEach((item) => {
    if (item[1] !== undefined && item[0] !== "Descricao") {
      console.log(item);
      update += `${item[0]} = "${item[1]}" `;
    } else if (item[0] === "Descricao" && item[1] !== undefined) {
      update += `, ${item[0]} = "${item[1]}" `;
    }
  });

  query += `${update} WHERE CodEspec = ${codespec}`;

  const query = `UPDATE Especialidade SET ${column} = "${value}" WHERE CodEspec = ${CodEspec}`;
  const columns = [column];


  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((result) => {
          logging.info(NAMESPACE, "Specialty updated: ", result);

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
export { updateSpecialty };
