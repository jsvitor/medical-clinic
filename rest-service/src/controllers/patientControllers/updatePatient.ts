import { NextFunction, Request, Response } from "express";

import logging from "../../config/logging";
import { Connect, Update } from "../../config/mysql";

const NAMESPACE = "patient";

const updatePatient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, "Updtating patient.");

  interface IPatient {
    CpfPaciente: string;
    name?: string;
    birth?: string;
    gender?: string;
    phone?: string;
    email?: string;
  }

  const { CpfPaciente, name, birth, gender, phone, email }: IPatient = req.body;

  /* const { CodMed } = req.params; */

  const query = `UPDATE paciente SET NomePac = ?, DataNascimento = ?, Genero = ?, Telefone = ?, Email = ? WHERE CpfPaciente = ?`;
  const columns = [name, birth, gender, phone, email, CpfPaciente];

  Connect()
    .then((connection) => {
      Update(connection, query, columns)
        .then((result) => {
          logging.info(NAMESPACE, "Patient updated: ", result);

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

export { updatePatient };
