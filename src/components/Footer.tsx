import { StudentInfo } from "./StudentInfo";
import
{
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerSwipeHandle,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "./ui/drawer";

export function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="mt-12 border-t pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Changed to flex-row, centered items, and wrapped text wrap settings */}
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap text-center">
            {/* insert Drawer of student information here */}
            <Drawer>
              <DrawerTrigger>
                <StudentInfo />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Kittiphit Mekaroonkamol</DrawerTitle>
                  <DrawerDescription>
                    เป็นนักศึกษาชั้นปีที่ 3 วิศวะกรรมศาสตร์คอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>Close</DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              &copy; {new Date().getFullYear()} CPE207 Corp. All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
