import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";
import Link from "next/link";
import { IcMenu } from "./resources/icons/IcMenu";

export function HeaderMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IcMenu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader></SheetHeader>
        <div className="space-y-4 mt-6 text-base flex flex-col">
          <Link href="#">Trang chủ</Link>
          <Link href="#">Giới thiệu</Link>
          <Link href="#">Lĩnh vực hoạt động</Link>
          <Link href="#">Tin tức</Link>
          <Link href="#">Pháo hoa</Link>
          <Link href="#">Thư viện</Link>
          <Link href="#">Liên hệ </Link>
          <Link href="#">Vietnam defence 2024</Link>
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <button type="submit">Save changes</button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
