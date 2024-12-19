import { getVideoGallery } from "@/apis/galleryApi";
import { VideoPost } from "@/types";
import { useEffect, useState } from "react";

export const useVideoGallery = () => {
  const [data, setData] = useState<VideoPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBusiness = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await getVideoGallery();
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
