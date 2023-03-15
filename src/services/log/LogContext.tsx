import { createContext, ReactNode, useEffect, useState } from 'react';

import { ILog } from '../../common/types';
import { getErrorMessage } from '../../utils/handleError';
import { retrieveLog } from './log.service';

type LogContextInterface = {
  getLog: (user: ILog) => Promise<void> | null;
  setError: (value: string | null) => void;
  isLoading: boolean;
  error: string | null;
  log: ILog[] | [];
};

export const LogContext = createContext<LogContextInterface>({
  getLog: () => null,
  setError: () => null,
  error: null,
  isLoading: false,
  log: [],
});

type ChildrenType = {
  children: ReactNode;
};

function LogContextProvider(props: ChildrenType) {
  const [log, setLog] = useState<ILog[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleError = (value: string | null) => {
    setError(value);
  };

  const getLog = async () => {
    setIsLoading(true);

    try {
      const result = await retrieveLog();

      setLog(result);
      setError(null);
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLog();
  }, []);

  return (
    <LogContext.Provider
      value={{ setError: handleError, getLog, log: log, isLoading, error }}
    >
      {props.children}
    </LogContext.Provider>
  );
}

export default LogContextProvider;
