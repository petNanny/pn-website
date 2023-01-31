import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

const BackgroundWrapper = ({ children }: Props) => {
  return (
    <div>
      <div className="min-w-[390px] max-w-7xl mx-auto overflow-hidden relative">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default BackgroundWrapper;
