import { useCallback,useRef, useState } from "react";

import { Nullable } from "../types";

interface UseMutateResult<ResponseType, RequestType> {
  data: Nullable<ResponseType>;
  isLoading: boolean;
  errorMessage: Nullable<string>;
  mutate: (body: RequestType) => Promise<ResponseType>;
  clear: () => void;
}

const useMutate = <ResponseType, RequestType>(
  mutateFunction: (body: RequestType) => Promise<ResponseType>,
  requestDuration = 1000
): UseMutateResult<ResponseType, RequestType> => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const [data, setData] = useState<ResponseType | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const clear = useCallback(() => {
    setData(null);
    setErrorMessage(null);
  }, []);

  const handleRequest = useCallback(
    async (body: RequestType) => {
      try {
        const result = await mutateFunction(body);
        setData(result);
        return result;
      } catch (err: unknown) {
        if (err instanceof Error) {
          setErrorMessage(err.message);
        } else {
          setErrorMessage("Unexpected error");
        }
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [mutateFunction]
  );

  const mutate = useCallback(
    async (body: RequestType): Promise<ResponseType> => {
      setLoading(true);
      setErrorMessage(null);
  
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
  
      return new Promise<ResponseType>((resolve, reject) => {
        timeoutRef.current = setTimeout(async () => {
          try {
            const result = await handleRequest(body);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, requestDuration);
      });
    },
    [handleRequest, requestDuration]
  );

  return {
    data,
    isLoading,
    errorMessage,
    mutate,
    clear,
  };
};

export default useMutate;
