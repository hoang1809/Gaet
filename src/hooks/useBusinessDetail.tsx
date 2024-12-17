import { useState, useEffect } from 'react';
import { getBusinessDetail } from '@/apis/businessApi';
import { Business } from '@/types/business.interface';

export const useBusinessDetail = (slug:string) => {
  const [data, setData] = useState<Business>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBusiness = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await getBusinessDetail(slug);
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
