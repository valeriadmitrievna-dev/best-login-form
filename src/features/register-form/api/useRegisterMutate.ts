import { useCallback } from "react";

import { useMutate } from "@/shared/api";

interface RegisterRequest {
  email: string;
  password: string;
}

const useRegisterMutate = () => {
  const mutateFunction = useCallback(async (data: RegisterRequest) => {
    if (data.email === "error@email.com" && data.password === "error") {
      throw new Error("Incorrect login data");
    }

    return { token: "abc123" };
  }, []);

  const { mutate, ...response } = useMutate(mutateFunction, 1000);

  return {
    ...response,
    register: mutate,
  };
};

export default useRegisterMutate;
