import { getNewsDetail } from '@/apis/newsApi';
import { News } from '@/types';
import { useEffect, useState } from 'react';

export const useNewsDetail = (id: string) => {
  const [data, setData] = useState<News>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBusiness = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await getNewsDetail(id);
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
