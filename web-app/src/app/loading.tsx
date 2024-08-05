import Image from "next/image";

export default function loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        className="h-24"
        src="/icons/general/tube-spinner.svg"
        alt="loading ..."
        width={100}
        height={100}
      />
    </div>
  );
}
