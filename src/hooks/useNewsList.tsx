import { getNewsList } from '@/apis/newsApi';
import { News } from '@/types';
import { useEffect, useState } from 'react';

export const useNewsList = () => {
  const [data, setData] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBusiness = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await getNewsList();
        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBusiness();
  }, []);

  return { data, isLoading, isError };
};
