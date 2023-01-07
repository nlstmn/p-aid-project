import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { get } from "lodash";
export type Response = {
  data: string;
  status: Boolean;
};

export const useGetFact = (): Response => {
  const [status, setStatus] = useState<boolean>(false);
  const [data, setData] = useState<string>("");
  const dataFetchedRef = useRef<boolean>(false);
  const getAPIData = async () => {
    try {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      const apiResponse = await axios.get("https://catfact.ninja/fact");
      setData(get(apiResponse, "data.fact", ""));
      setStatus(true);
      return get(apiResponse, "data.fact", "");
    } catch (error) {
      setStatus(false);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);
  return { status, data };
};
