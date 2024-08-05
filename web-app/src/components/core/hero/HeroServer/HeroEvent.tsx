import React from "react";
import { FlexWrapper } from "@/components/core/hero";
// import {EventDataProps} from "@/types/supabaseTypes"

const HeroEvent = () => {
  return (
    <FlexWrapper containerClassName="min-h-auto" layoutClass="div-col-row">
      <div className="w-full md:w-1/2 h-auto">
        <div className="">
          <h1 className="text-6xl font-bold">Outdoor Workship</h1>

          {/* country region island */}
          <div className="flex flex-col mt-16 font-light ">
            <span className="">Date: Sunday August 11th, 2024</span>
            <span className=" ">Start Time: 10:00 AM</span>
            <span className=" ">Location: Glenmore Park</span>
          </div>

          {/* description */}
          <div className="description w-full sm: md:w-2/3 mt-16 text-white text-sm">
            Come join us for a day of fun and learning. We will start our
            service at 10:00 AM and end at 4:00 PM. We will have a BBQ lunch and
            refreshments. Please bring a dish to share. The park is perfect for
            bike rides.
          </div>
        </div>
      </div>
      <div className="bg-white w-full md:w-1/2 h-auto">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-auto w-full"
          alt=""
        />
      </div>
    </FlexWrapper>
  );
};

export default HeroEvent;
