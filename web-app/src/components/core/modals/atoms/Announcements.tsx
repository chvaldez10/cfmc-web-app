import React from "react";

const Announcements = () => {
  return (
    <section className="text-purple-500 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-purple-500">
                Date
              </span>
              <span className="mt-1 text-gray-500 text-sm">12 Jun 2024</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-purple-500 title-font mb-2">
                Header
              </h2>
              <p className="leading-relaxed">Long Paragraph</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
