import { createContext, ReactNode, useEffect, useState } from 'react';

import { ICategory } from '../../common/types';
import { getErrorMessage } from '../../utils/handleError';
import { retrieveCategories } from './category.service';

type CategoryContextInterface = {
  getCategories: (user: ICategory) => Promise<void> | null;
  setError: (value: string | null) => void;
  isLoading: boolean;
  error: string | null;
  categories: ICategory[] | [];
};

export const CategoryContext = createContext<CategoryContextInterface>({
  getCategories: () => null,
  setError: () => null,
  error: null,
  isLoading: false,
  categories: [],
});

type ChildrenType = {
  children: ReactNode;
};

function CategoryContextProvider(props: ChildrenType) {
  const [categories, setCategories] = useState<ICategory[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleError = (value: string | null) => {
    setError(value);
  };

  const getCategories = async () => {
    setIsLoading(true);

    try {
      const result = await retrieveCategories();

      setCategories(result);
      setError(null);
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        setError: handleError,
        getCategories: getCategories,
        categories: categories,
        isLoading,
        error,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
