import { FC } from "react";

const MissionStatement: FC = () => {
  return (
    <>
      <p className="mt-2 text-base md:text-xl">
        To <span className="font-semibold text-green-70">reach out</span> to as
        many people as we possibly can to share with them the good news of God’s
        redeeming love in Jesus Christ. To
        <span className="font-semibold text-green-70"> lead</span> them to that
        new life of
        <span className="italic text-gray-900">
          {" "}
          faith, trust, love, and obedience
        </span>{" "}
        to Jesus Christ. To
        <span className="font-semibold text-green-70">
          {" "}
          continue nurturing
        </span>{" "}
        them to become Christ-like in their lives.
      </p>
    </>
  );
};

export default MissionStatement;
