import { useCallback, useState } from "react";

const useOpenedStateControl = (defaultOpened: boolean = false) => {
  const [isOpened, setOpened] = useState<boolean>(defaultOpened);

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);
  const toggle = useCallback(() => setOpened(previousState => !previousState), []);
  const set = useCallback((value: boolean) => setOpened(value), []);

  return {
    isOpened,
    open,
    close,
    toggle,
    set,
  };
};

export default useOpenedStateControl;
