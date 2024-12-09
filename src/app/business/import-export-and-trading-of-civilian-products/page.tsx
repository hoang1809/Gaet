import Link from "next/link";

const IndustrialExplosive = () => {
  return (
    <div>
      <img
        src="/business/import-export-and-trading-of-civilian-products/image1.jpg"
        alt="image1"
      />
      <Link href="/">
        <button className="mt-6 mb-8 text-[18px] font-normal underline underline-offset-[5px]">
          Trở lại
        </button>
      </Link>
      <div className="max-w-[920px] mx-auto">
        <div className="mb-12">
          <div className="text-[32px] font-bold">
            XNK và kinh doanh các mặt hàng kinh tế
          </div>
          <div className="text-[#888] text-[18px] mt-4">12/11/2024</div>
        </div>
        <div className="space-y-8 text-[18px]">
          <div>
            GAET tự hào khẳng định lợi thế cạnh tranh khác biệt và được đối tác
            đánh giá cao trong việc cung cấp dịch vụ, xử lý các đơn hàng lớn
            trong thời gian ngắn nhất trên thị trường.
          </div>
          <img
            className="w-full"
            src="/business/import-export-and-trading-of-civilian-products/image2.png"
            alt="image2"
          />
          <div className="md:grid grid-cols-2 gap-4">
            <img
              className="w-full"
              src="/business/import-export-and-trading-of-civilian-products/image3.png"
              alt="image3"
            />
            <img
              className="w-full"
              src="/business/import-export-and-trading-of-civilian-products/image4.png"
              alt="image4"
            />
            <img
              className="w-full"
              src="/business/import-export-and-trading-of-civilian-products/image5.png"
              alt="image5"
            />
            <img
              className="w-full"
              src="/business/import-export-and-trading-of-civilian-products/image6.png"
              alt="image6"
            />
          </div>
          <div>
            Dựa trên mối quan hệ truyền thống với các nhà sản xuất trong nước và
            quốc tế, GAET khẳng định sẽ cung cấp những sản phẩm chất lượng tốt
            nhất với giá thành cạnh tranh nhất.
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialExplosive;
