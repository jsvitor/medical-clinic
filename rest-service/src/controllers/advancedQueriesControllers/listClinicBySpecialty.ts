import { NextFunction, Request, Response } from "express";

import logging from "../../config/logging";
import { Connect, Query } from "../../config/mysql";

const NAMESPACE = "doctor";

const listClinicBySpecialty = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "Listing every clinic wich have this specialty");

  const { NomeEspec } = req.body;

  const query = `SELECT NomeCli, clinica.Endereco, clinica.Telefone, clinica.Email FROM clinica INNER JOIN medico, especialidade, clinicamedico WHERE clinica.CodCli = clinicamedico.CodCli and medico.CodMed = clinicamedico.CodMed AND medico.CodEspec = especialidade.CodEspec and especialidade.NomeEspec = "${NomeEspec}" group by NomeCli, NomeEspec;`;

  Connect()
    .then((connection) => {
      Query(connection, query)
        .then((result) => {
          logging.info(
            NAMESPACE,
            "Every clinic wich have this specialty: ",
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

export { listClinicBySpecialty };
