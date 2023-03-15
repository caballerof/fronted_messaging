// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createContext, ReactNode, useEffect, useRef, useState } from 'react';

const wsHost = import.meta.env.VITE_WS_PATH;

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

  const websocket = useRef();

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

  useEffect(() => {
    websocket.current = new WebSocket(wsHost);

    websocket.current.onopen = function (evt) {
      console.log('Connection opened');
    };

    websocket.current.onclose = function (evt) {
      console.log('Connection close');
    };

    websocket.current.onmessage = function (evt) {
      if (evt.data.includes('time')) {
        const data = JSON.parse(evt.data);

        setLog((_log) => [data, ..._log]);
      }
    };

    websocket.current.onerror = function (evt) {
      console.log('Connection error');
    };
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
