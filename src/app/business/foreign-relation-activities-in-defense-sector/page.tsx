import Link from "next/link";

const ForeignrelationAvtivities = () => {
  return (
    <div>
      <img
        src="/business/foreign-relation-activities-in-defense-sector/image1.jpg"
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
            Hoạt động đối ngoại quốc phòng
          </div>
          <div className="text-[#888] text-[18px] mt-4">12/11/2024</div>
        </div>
        <div className="space-y-8 text-[18px]">
          <div className="font-semibold">
            Trưng bày sản phẩm tại các Triển lãm trong nước và quốc tế
          </div>
          <div>
            GAET đã tham gia trưng bày, quảng bá các sản phẩm kinh tế và sản
            phẩm công nghiệp quốc phòng do Việt Nam sản xuất tại nhiều Triển lãm
            trong nước và quốc tế.
          </div>
          <div className="md:grid grid-cols-3 gap-4">
            <img
              className="w-full"
              src="/business/foreign-relation-activities-in-defense-sector/image2.jpg"
              alt="image3"
            />
            <img
              className="w-full"
              src="/business/foreign-relation-activities-in-defense-sector/image3.jpg"
              alt="image3"
            />
            <img
              className="w-full"
              src="/business/foreign-relation-activities-in-defense-sector/image4.jpg"
              alt="image4"
            />
          </div>
          <div className="font-semibold">
            Tổ chức Triển lãm Quốc tế về Quốc phòng – An ninh
          </div>
          <img
            className="w-full"
            src="/business/foreign-relation-activities-in-defense-sector/image5.jpg"
            alt="image5"
          />
          <div>
            GAET đã phối hợp với một số đơn vị tổ chức thành công Triển lãm quốc
            tế đầu tiên về Quốc phòng – An ninh tại Việt Nam (DSE Vietnam 2019),
            tham gia tích cực vào công tác tổ chức và đảm nhiệm công tác thương
            mại cho Triển lãm Quốc phòng Quốc tế Việt Nam (Vietnam Defence) do
            Bộ Quốc phòng Việt Nam tổ chức.
          </div>
          <img
            className="w-full"
            src="/business/foreign-relation-activities-in-defense-sector/image6.jpg"
            alt="image6"
          />
          <div className="font-semibold">
            Các hoạt động đối ngoại quốc phòng khác
          </div>
          <div>
            GAET được Bộ Quốc phòng giao nhiệm vụ tham gia thực hiện nhiều hoạt
            động Đối ngoại quốc phòng. GAET đã thực hiện tốt nhiệm vụ mua sắm,
            nhập khẩu vật tư, trang thiết bị phục vụ cho hoạt động gìn giữ hòa
            bình của Liên Hợp Quốc tại Nam Xu-Đăng.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeignrelationAvtivities;
