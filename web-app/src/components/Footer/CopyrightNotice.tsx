import { FC } from "react";

const CopyrightNotice: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-wrap items-center justify-center md:justify-between">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <p className="text-sm text-blueGray-500 font-semibold py-1">
          Calgary Filipino Methodist Church ©{" "}
          <span id="get-current-year">{currentYear}</span>
        </p>
      </div>
    </div>
  );
};

export default CopyrightNotice;
