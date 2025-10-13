import { ChurchMembers } from "@/types/supabase/members";

export const PastoralTeam: ChurchMembers[] = [
  {
    isActive: true,
    isBoardMember: false,
    isMinisterialTeam: true,
    isLeader: true,
    firstName: "Jose V.",
    lastName: "Velasco, Jr.",
    suffix: "Rev.",
    role: "Senior Pastor",
    headline: "Pastor",
    bio: "He served various Methodist churches in the Philippines and united churches in Canada before establishing the Calgary Filipino Methodist Church in Alberta to reach out to Filipino-Canadians and other immigrants. He finished his Bachelor of Theology (1957) from the Union Theological Seminary, Manila, Philippines, and an ecumenical theological program (1963) at the Pittsburgh Theological Seminary in Pennsylvania, USA.",
  },
  {
    isActive: true,
    isBoardMember: false,
    isMinisterialTeam: true,
    isLeader: true,
    firstName: "Jonavern P.",
    lastName: "Lungub",
    suffix: "Rev",
    role: "Founding Pastor",
    headline: "Adviser",
    bio: "He served various Methodist churches in the Philippines, the USA, and the Middle East before joining Calgary Filipino Methodist Church as the lead Pastor. He was honed theologically from Far Eastern Bible Institute and Seminary (Bachelor of Theology, 2004) in Valenzuela City and Union Theological Seminary (Master of Divinity, 2010) in Dasmariñas City, Philippines. He took further studies at the United Theological Seminary (Master of Theological Studies, 2016) in Dayton, Ohio, and is currently pursuing a Doctor of Ministry program at the Asbury Theological Seminary, Kentucky, USA.",
  },
];

export const LEADERSHIP_CONTENT_INTROS: {
  [key: string]: {
    title: string;
    description: string;
  };
} = {
  BOARD_MEMBERS: {
    title: "Board Members",
    description:
      "The CFMC Board is composed of servant leaders called by God, saved by His grace, and empowered by the Holy Spirit. These men and women of God came from all walks of life and united in Christ, representing our brothers and sisters from the congregation in praying, discerning God's will, and in making major decisions based on God's Word to lead the church in faithful service in doing Christ's mission.",
  },
  MINISTERIAL_TEAM: {
    title: "Ministerial Team",
    description:
      "CFMC ministerial team is composed of servant leaders called by God, redeemed and chosen by Jesus Christ, endowed by the Holy Spirit with grace and gifts to serve the church to lead people to faith in Christ, and mentor them to become faithful followers together in the Lord. These men and women of God are ordained pastors and commissioned deaconesses.",
  },
  PASTORAL_TEAM: {
    title: "Pastoral Team",
    description:
      "Guided by faith and a shared mission, the Calgary Filipino Methodist Church pastoral team brings together dedicated leaders with a heart for ministry, service, and community. Their diverse experiences and theological training reflect a deep commitment to nurturing spiritual growth and connecting people through Christ's love.",
  },
};
