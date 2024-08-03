// import { FC } from "react";
// import { EventBlogCategory } from "@/components/core/cards";
// import { EventData } from "@/types/eventData";
// import SectionHeader from "@/components/core/text/SectionHeader";
// import ContainerWrapper from "@/components/core/hero/molecules/ContainerWrapper";

// interface EventBlogProps {
//   events: EventData[];
// }

// const EventBlog: FC<EventBlogProps> = ({ events }) => {
//   return (
//     <div className="div-outside-width py-16 gap-5 bg-violet-10">
//       <SectionHeader text={"All Upcoming Events"} className={"text-center"} />

//       {/* Events */}
//       <ContainerWrapper>
//         <div className="flex flex-wrap -mx-4 ">
//           {events.map((event, index) => (
//             <EventBlogCategory key={index} event={event} />
//           ))}
//         </div>
//       </ContainerWrapper>
//     </div>
//   );
// };

// export default EventBlog;
