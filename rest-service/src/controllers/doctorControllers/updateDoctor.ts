import { NextFunction, Request, Response } from "express";

import logging from "../../config/logging";
import { Connect, Update } from "../../config/mysql";

const NAMESPACE = "doctor";

const updateDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "Updtating doctor.");

  interface IDoctor {
    codMed: number;
    name?: string;
    gender?: string;
    phone?: string;
    email?: string;
    codEspec?: number;
  }

  const { codMed, name, gender, phone, email, codEspec }: IDoctor = req.body;

  /* const { CodMed } = req.params; */

  const query = `UPDATE Medico SET NomeMed = ?, Genero = ?, Telefone = ?, Email = ?, CodEspec = ? WHERE CodMed = ?`;
  const columns = [name, gender, phone, email, codEspec, codMed];

  Connect()
    .then((connection) => {
      Update(connection, query, columns)
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
