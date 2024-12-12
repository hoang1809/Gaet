'use client';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '@/lib/utils';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useId } from 'react';
import { SwiperOptions } from 'swiper/types';
import { IcCircleArrowLeft } from '@/components/common/resources/icons/IcCircleArrowLeft';

type Props = {
  slides: string[];
  slidesPerView?: number;
  slideClassName?: string;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  className?: string;
};

export default function HomePageSwiper({
  slides,
  slidesPerView,
  slideClassName,
  breakpoints,
  className,
}: Props) {
  const id = useId()?.replace(/\W/g, '');
  return (
    <>
      <Swiper
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        pagination={{
          el: '.custom-pagination-' + id,
          clickable: true,
        }}
        spaceBetween={24}
        rewind={true}
        modules={[Navigation, Pagination]}
        slidesPerView={"auto"}
        breakpoints={breakpoints}
        className={`mySwiper ${className}`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              className={cn(
                `aspect-square w-full object-fill ${slideClassName}`,
              )}
              src={slide}
            />
          </SwiperSlide>
        ))}

        <div
          className={`prev absolute bottom-0 top-0 z-10 m-auto ml-2 flex h-6 w-6 cursor-pointer items-center justify-center shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.15)] sm:h-10 sm:w-10 sm:rounded-full`}
        >
          <IcCircleArrowLeft className='text-primary'/>
        </div>

        <div
          className={`next absolute bottom-0 right-0 top-0 z-10 m-auto mr-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.15)] sm:h-10 sm:w-10 sm:rounded-full`}
        >
          <IcCircleArrowLeft className='rotate-180 text-primary'/>
        </div>
      </Swiper>

      <div
        className={cn(
          `custom-pagination-${id} mt-4 flex items-center justify-center [&>.swiper-pagination-bullet]:h-3 [&>.swiper-pagination-bullet]:w-3 [&>.swiper-pagination-bullet]:bg-primary`,
        )}
      />
    </>
  );
}
