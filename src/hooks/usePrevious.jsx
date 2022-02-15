import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const refValue = useRef(value);

  useEffect(() => {

    refValue.current = value;

  }, [value]);

  return refValue.current;
};

export default usePrevious;
