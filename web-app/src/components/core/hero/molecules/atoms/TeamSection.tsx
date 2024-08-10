import { IoPerson } from "react-icons/io5";

interface BoardMember {
  boardMemberName: string;
  boardPosition: string;
  caption: string;
}

const boardMembers: BoardMember[] = [
  {
    boardMemberName: "Board Member Name 1",
    boardPosition: "Board Position 1",
    caption: "Short caption here",
  },
  {
    boardMemberName: "Board Member Name 2",
    boardPosition: "Board Position 2",
    caption: "Another short caption",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="bg-purple-50">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-purple-900">
            Our Team
          </h2>
          <p className="font-light text-purple-600 lg:mb-16 sm:text-xl">
            Explore our talented team of professionals dedicated to driving
            innovation and excellence.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="items-center bg-white rounded-lg shadow sm:flex"
            >
              <div className="w-full sm:w-1/3 flex items-center justify-center p-5">
                <IoPerson className="w-24 h-24 text-purple-500" />
              </div>
              <div className="p-5 sm:w-2/3">
                <h3 className="text-xl font-bold tracking-tight text-purple-900">
                  <a href="#">{member.boardMemberName}</a>
                </h3>
                <span className="text-purple-600">{member.boardPosition}</span>
                <p className="mt-3 mb-4 font-light text-purple-700">
                  {member.caption}
                </p>
                <p className="mt-3 mb-4 font-light text-purple-700">
                  `Email: email@example.com`
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
