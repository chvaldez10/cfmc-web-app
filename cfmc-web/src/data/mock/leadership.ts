import { ChurchMembers } from "@/types/supabase/members";

export const PastoralTeam: ChurchMembers[] = [
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
    lastName: "Velasco",
    suffix: "",
    role: "Senior Pastor",
    headline: "Adviser, Non-voting Member (Board)",
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
