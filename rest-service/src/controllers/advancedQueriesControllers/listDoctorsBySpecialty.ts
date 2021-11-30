import { NextFunction, Request, Response } from "express";

import logging from "../../config/logging";
import { Connect, Query } from "../../config/mysql";

const NAMESPACE = "doctor";

const listDoctorsBySpecialty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "Listing every doctor wich have this specialty");

  const { nomeEspec } = req.params;
  console.log(nomeEspec);

  const query = `SELECT Medico.NomeMed, Medico.Genero, Medico.Email FROM Medico INNER JOIN Especialidade USING(CodEspec) WHERE Especialidade.NomeEspec = "${nomeEspec}";`;

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((result) => {
          logging.info(
            NAMESPACE,
            "Every doctor wich have this specialty: ",
            result
          );

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

export { listDoctorsBySpecialty };
