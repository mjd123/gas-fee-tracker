import axios from "axios";
import { useEffect, useState } from "react";

interface useAxiosProps {
  message: any;
}

const useAxios = () => {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(
          "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken"
        );
        const data = await resp?.data;
        console.log(data);

        setApiData(data);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    })();
  }, []);
  return { isLoading, apiData };
};

export default useAxios;
