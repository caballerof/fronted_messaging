import camelize from 'camelize-ts';
const host = import.meta.env.VITE_API_PATH;
import { IMessage } from '../../common/types';

const RESOURCE = 'messages';

export const addMessage = (message: IMessage) => {
  const url = `${host}/${RESOURCE}`;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(message),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error posting message');
      }

      return response.json();
    })
    .then((result) => {
      const { message, code } = result;

      if (code < 200 || code >= 300) {
        throw new Error(message);
      }

      return result;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const messageAddTransform = (results: IMessage) => {
  return camelize(results) as IMessage;
};
