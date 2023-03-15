import camelize from 'camelize-ts';
const host = import.meta.env.VITE_API_PATH;
import { ICategory } from '../../common/types';

const RESOURCE = 'categories';

export const retrieveCategories = (): Promise<ICategory[]> => {
  const url = `${host}/${RESOURCE}`;

  return fetch(url, {
    method: 'GET',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error getting categories');
      }

      return response.json();
    })
    .then((result) => {
      const { message, code } = result;

      if (code < 200 || code >= 300) {
        throw new Error(message);
      }

      return categoriesTransform(result);
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const categoriesTransform = (results: ICategory[]) => {
  return camelize(results) as ICategory[];
};
