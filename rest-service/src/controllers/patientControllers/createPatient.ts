import { NextFunction, Request, Response } from "express";

import logging from "../../config/logging";
import { Connect, Query } from "../../config/mysql";

const NAMESPACE = "patient";

const createPatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "Inserting patient");

  const { CpfPaciente, NomePac, DataNascimento, Genero, Telefone, E_mail } = req.body;

  const query = `INSERT INTO paciente (CpfPaciente, NomePac, DataNascimento, Genero, Telefone, E_mail) VALUES ("${CpfPaciente}", "${NomePac}", "${DataNascimento}", "${Genero}", "${Telefone}", "${E_mail}")`;

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((result) => {
          logging.info(NAMESPACE, "Patient created: ", result);

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

export { createPatient };
