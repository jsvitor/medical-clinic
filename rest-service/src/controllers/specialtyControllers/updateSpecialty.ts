import { NextFunction, Request, Response } from "express";

import logging from "../../config/logging";
import { Connect, Update } from "../../config/mysql";

const NAMESPACE = "specialty";

const updateSpecialty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "Updtating specialty.");

  const { CodEspec, column, value } = req.body;

  /* const { CodMed } = req.params; */

  const query = `UPDATE Especialidade SET ${column} = "${value}" WHERE CodEspec = ${CodEspec}`;
  const columns = [column];

  Connect()
    .then((connection) => {
      Update(connection, query, columns)
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
