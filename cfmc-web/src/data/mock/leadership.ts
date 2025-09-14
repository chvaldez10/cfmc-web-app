// TODO: fetch from supabase
export type ChurchMembers = {
  birthDate?: Date;
  isActive: boolean;
  isBoardMember: boolean;
  isMinisterialTeam: boolean;
  username?: string;
  bio?: string;
  tags?: string[];
  suffix?: string;
  email?: string;
  role: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  isLeader: boolean;
  headline?: string;
  image_banner?: string;
  image_profile?: string;
};

export const LeadershipMembers: ChurchMembers[] = [
  {
    isActive: true,
    isBoardMember: true,
    isMinisterialTeam: true,
    isLeader: true,
    firstName: "Jonavern",
    lastName: "Lungub",
    suffix: "P.",
    role: "Administrative Pastor",
    headline: "Adviser, Non-voting Member (Board)",
  },
  {
    isActive: true,
    isBoardMember: true,
    isMinisterialTeam: true,
    isLeader: true,
    firstName: "Jose",
    lastName: "Velasco, Jr.",
    suffix: "V.",
    role: "Pastor Emeritus & Founding Pastor",
    headline: "Voting Member (Board)",
  },
  {
    isActive: true,
    isBoardMember: true,
    isMinisterialTeam: false,
    isLeader: true,
    firstName: "Vincent",
    lastName: "Vinluan",
    suffix: "L.",
    role: "Chairman of the Board",
  },
  {
    isActive: true,
    isBoardMember: true,
    isMinisterialTeam: false,
    isLeader: true,
    firstName: "Roberto",
    lastName: "Tamayo",
    role: "Church Treasurer",
  },
  {
    isActive: true,
    isBoardMember: true,
    isMinisterialTeam: false,
    isLeader: true,
    firstName: "Jose",
    lastName: "Valdez",
    username: "Jolex",
    role: "Internal Auditor",
  },
  {
    isActive: true,
    isBoardMember: true,
    isMinisterialTeam: false,
    isLeader: true,
    firstName: "Napoleon",
    lastName: "Tugade, Jr.",
    username: "June",
    role: "Board Officer",
  },
  {
    isActive: true,
    isBoardMember: true,
    isMinisterialTeam: false,
    isLeader: true,
    firstName: "Alicia",
    lastName: "Tamayo",
    role: "Board Officer",
  },
  {
    isActive: true,
    isBoardMember: true,
    isMinisterialTeam: true,
    isLeader: true,
    firstName: "Wendy",
    lastName: "Valdez",
    role: "Deaconess",
    headline: "Board Officer (Board)",
  },
  {
    isActive: true,
    isBoardMember: false,
    isMinisterialTeam: true,
    isLeader: true,
    firstName: "Teresita",
    lastName: "Velasco",
    role: "Deaconess",
  },
  {
    isActive: true,
    isBoardMember: false,
    isMinisterialTeam: true,
    isLeader: true,
    firstName: "Nelia",
    lastName: "Soriano",
    role: "Deaconess",
  },
];

export const LEADERSHIP_CONTENT_INTROS: {
  title: string;
  description: string;
}[] = [
  {
    title: "Leadership",
    description:
      "The CFMC Board is composed of servant leaders called by God, saved by His grace, and empowered by the Holy Spirit. These men and women of God came from all walks of life and united in Christ, representing our brothers and sisters from the congregation in praying, discerning God's will, and in making major decisions based on God's Word to lead the church in faithful service in doing Christ's mission.",
  },
  {
    title: "CFMC Ministerial Team",
    description:
      "CFMC ministerial team is composed of servant leaders called by God, redeemed and chosen by Jesus Christ, endowed by the Holy Spirit with grace and gifts to serve the church to lead people to faith in Christ, and mentor them to become faithful followers together in the Lord. These men and women of God are ordained pastors and commissioned deaconesses.",
  },
];
