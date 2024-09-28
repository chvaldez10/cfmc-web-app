import Image from "next/image";
import { FlexCenter } from "@/components/core/ui";

export default function Loading() {
  return (
    <FlexCenter containerClassName="h-screen">
      <Image
        className="h-24"
        src="/icons/general/tube-spinner.svg"
        alt="loading ..."
        width={100}
        height={100}
      />
    </FlexCenter>
  );
}
