import { NextFunction, Request, Response } from "express";

import logging from "../../config/logging";
import { Connect, Query, Update } from "../../config/mysql";

const NAMESPACE = "specialty";

const deleteOneSpecialty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "Deleting one specialty.");

  const { CodEspec } = req.body;

  const query = `DELETE FROM especialidade WHERE CodEspec = ${CodEspec}`;

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((results) => {
          logging.info(NAMESPACE, "Deleted specialty: ", results);

          return res.status(200).send();
        })
        .catch((error) => {
          logging.error(NAMESPACE, error.message, error);

          return res.status(404).json({
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

      return res.status(404).json({
        message: error.message,
        error,
      });
    });
};

export { deleteOneSpecialty };
