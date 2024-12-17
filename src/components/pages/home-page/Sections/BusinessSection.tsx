import { IcCircleArrowLeft } from '@/components/common/resources/icons/IcCircleArrowLeft'
import Link from 'next/link'
import React from 'react'

const BusinessSection = () => {
  return (
    <div className="bg-[#f6f6f6]">
        <div id="linh-vuc-hoat-dong" className="py-28">
          <div className="container">
            <div>
              <div className="font-medium text-2xl">Lĩnh vực hoạt động</div>
              <div className="h-1 mt-2 w-[120px] bg-primary"></div>
            </div>
          </div>
          <div className="grid md:container mt-16 h-[100vh] md:h-[50vh] md:max-h-[360px] md:grid-cols-5">
            <Link
              href="business/thuong-mai-quan-su"
              className="overflow-hidden relative flex flex-col py-14 px-6 justify-between items-center group"
            >
              <div className="h-full absolute z-[1] w-full top-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-10% via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.75)] to-90%"></div>
              <div className="h-full absolute w-full top-0 bg-[url('/homepage/business/business1.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
              <div className="text-white text-[28px] z-[1] font-bold text-center">
                Thương mại quân sự
              </div>
              <IcCircleArrowLeft className="text-primary rotate-180 hidden md:block" />
            </Link>
            <Link
              href="business/kinh-doanh-vat-lieu-no-cong-nghiep"
              className="overflow-hidden relative flex flex-col py-14 px-6 justify-between items-center group"
            >
              <div className="h-full absolute z-[1] w-full top-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-10% via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.75)] to-90%"></div>
              <div className="h-full absolute w-full top-0 bg-[url('/homepage/business/business2.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
              <div className="text-white text-[28px] z-[1] font-bold text-center">
                Kinh doanh vật liệu nổ công nghiệp
              </div>
              <IcCircleArrowLeft className="text-primary rotate-180 hidden md:block" />
            </Link>
            <Link
              href="business/hoat-dong-doi-ngoai-quoc-phong"
              className="overflow-hidden relative flex flex-col py-14 px-6 justify-between items-center group"
            >
              <div className="h-full absolute z-[1] w-full top-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-10% via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.75)] to-90%"></div>
              <div className="h-full absolute w-full top-0 bg-[url('/homepage/business/business3.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
              <div className="text-white text-[28px] z-[1] font-bold text-center">
                Hoạt động đối ngoại quốc phòng
              </div>
              <IcCircleArrowLeft className="text-primary rotate-180 hidden md:block" />
            </Link>
            <Link
              href="business/xnk-va-kinh-doanh-cac-mat-hang-kinh-te"
              className="overflow-hidden relative flex flex-col py-14 px-6 justify-between items-center group"
            >
              <div className="h-full absolute z-[1] w-full top-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-10% via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.75)] to-90%"></div>
              <div className="h-full absolute w-full top-0 bg-[url('/homepage/business/business4.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
              <div className="text-white text-[28px] z-[1] font-bold text-center">
                XNK và kinh doanh các mặt hàng kinh tế
              </div>
              <IcCircleArrowLeft className="text-primary rotate-180 hidden md:block" />
            </Link>
            <Link
              href="business/linh-vuc-hoat-dong-khac"
              className="overflow-hidden relative flex flex-col py-14 px-6 justify-between items-center group"
            >
              <div className="h-full absolute z-[1] w-full top-0 bg-gradient-to-t from-[rgba(0,0,0,0)] from-10% via-[rgba(0,0,0,0)] via-30% to-[rgba(0,0,0,0.75)] to-90%"></div>
              <div className="h-full absolute w-full top-0 bg-[url('/homepage/business/business5.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
              <div className="text-white text-[28px] z-[1] font-bold text-center">
                Các lĩnh vực khác
              </div>
              <IcCircleArrowLeft className="text-primary rotate-180 hidden md:block" />
            </Link>
          </div>
        </div>
      </div>
  )
}

export default BusinessSection