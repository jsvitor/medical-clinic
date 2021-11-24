import { NextFunction, Request, Response } from "express";

import logging from "../../config/logging";
import { Connect, Update } from "../../config/mysql";

const NAMESPACE = "clinic";

const updateClinic = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "Updtating clinic.");

  interface IClinic {
    CodCli: string;
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
  }

  const { CodCli, name, address, phone, email }: IClinic = req.body;

  /* const { CodMed } = req.params; */

  const query = `UPDATE clinic SET NomeCli = ?, endereco = ?, Telefone = ?, Email = ? WHERE CodCli = ?`;
  const columns = [name, address, phone, email, CodCli];

  Connect()
    .then((connection) => {
      Update(connection, query, columns)
        .then((result) => {
          logging.info(NAMESPACE, "Clinic updated: ", result);

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

export { updateClinic };
