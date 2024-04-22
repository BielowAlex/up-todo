import React from "react";

export const useDelayUnmount = (isMounted: boolean, delay: number): boolean => {
  const [shouldRender, setShouldRender] = React.useState<boolean>(false);

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isMounted, shouldRender, delay]);

  return shouldRender;
};
