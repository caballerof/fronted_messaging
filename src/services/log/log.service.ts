import camelize from 'camelize-ts';
const host = import.meta.env.VITE_API_PATH;
import { ILog } from '../../common/types';

const RESOURCE = 'logs';

export const retrieveLog = (): Promise<ILog[]> => {
  const url = `${host}/${RESOURCE}`;

  return fetch(url, {
    method: 'GET',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error getting log');
      }

      return response.json();
    })
    .then((result) => {
      const { message, code } = result;

      if (code < 200 || code >= 300) {
        throw new Error(message);
      }

      return LogTransform(result);
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const LogTransform = (results: ILog[]) => {
  return camelize(results) as ILog[];
};
