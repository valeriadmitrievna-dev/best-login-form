import { useCallback } from "react";

import { useMutate } from "@/shared/api";

interface LoginRequest {
  email: string;
  password: string;
}

const useLoginMutate = () => {
  const mutateFunction = useCallback(async (data: LoginRequest) => {
    if (data.email === "error@email.com" && data.password === "error") {
      throw new Error("Incorrect login data");
    }

    return { token: "abc123" };
  }, []);

  const { mutate, ...response } = useMutate(mutateFunction, 1000);

  return {
    ...response,
    login: mutate,
  };
};

export default useLoginMutate;
