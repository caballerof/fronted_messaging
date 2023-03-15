import { createContext, ReactNode, useState } from 'react';

import { IMessage } from '../../common/types';
import { getErrorMessage } from '../../utils/handleError';
import { addMessage } from './message.service';

type MessageContextInterface = {
  postMessage: (user: IMessage) => Promise<void> | null;
  setError: (value: string | null) => void;
  isLoading: boolean;
  error: string | null;
  message: string;
};

export const MessageContext = createContext<MessageContextInterface>({
  postMessage: () => null,
  setError: () => null,
  error: null,
  isLoading: false,
  message: '',
});

type ChildrenType = {
  children: ReactNode;
};

function MessageContextProvider(props: ChildrenType) {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleError = (value: string | null) => {
    setError(value);
  };

  const postMessage = async (data: IMessage) => {
    setIsLoading(true);

    try {
      const result = await addMessage(data);

      const text = result.text ?? '';

      setMessage(text);
      setError(null);
      return result;
    } catch (error) {
      setError(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MessageContext.Provider
      value={{ setError: handleError, postMessage, message, isLoading, error }}
    >
      {props.children}
    </MessageContext.Provider>
  );
}

export default MessageContextProvider;
