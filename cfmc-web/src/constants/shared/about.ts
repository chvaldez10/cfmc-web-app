import { CardDataProps } from "@/types/ui/components";
import { FaCross, FaHandsHelping, FaUsers, FaHeart } from "react-icons/fa";
import { PublicLabels } from "./enums";

// const aquaMeadow = "linear-gradient(135deg, #ECFDF5 0%, #5EEAD4 100%)";
const plumCloud = "linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)";

export const ABOUT_US_PAGE_CARDS: CardDataProps[] = [
  {
    bg: plumCloud,
    icon: FaCross,
    title: PublicLabels.MISSION_VISION,
    description:
      "Calgary Filipino Methodist Church exists to love God who first loved us and love people by faithfully, holistically, boldly and joyfully proclaiming the Good News of Christ to all.",
    footerLink: { label: "Learn More", href: "/about/mission-vision" },
  },

  {
    bg: plumCloud,
    icon: FaHandsHelping,
    title: PublicLabels.MINISTRIES,
    description:
      "Dedicated to uplifting and serving our community through various outreach programs, youth ministry, worship services, and charitable initiatives that make a positive impact.",
    footerLink: { label: "View Ministries", href: "/" },
  },
  {
    bg: plumCloud,
    icon: FaUsers,
    title: PublicLabels.LEADERSHIP,
    description:
      "Guides us with integrity and vision, providing spiritual direction, pastoral care, and strategic leadership to help our congregation grow in faith and service.",
    footerLink: { label: "Learn More", href: "/" },
  },
  {
    bg: plumCloud,
    icon: FaHeart,
    title: PublicLabels.COMMUNITY,
    description:
      "Thrives on collaboration and support, creating a warm, inclusive family where everyone is valued, supported, and encouraged to grow in their spiritual journey together.",
    footerLink: { label: "Join Us", href: "/" },
  },
];

export interface AboutContentItem {
  title: string;
  description: string;
}

export const ABOUT_CONTENT: Record<string, AboutContentItem> = {
  VISION_STATEMENT: {
    title: "Vision",
    description:
      "A church that glorifies God alone by being Bible-believing, Christ-centered, and Holy Spirit-led in doing the Great Commission and Great Commandment.",
  },
  VISION_STATEMENT_EXTENDED: {
    title: "Vision Statement",
    description:
      "Calgary Filipino Methodist Church envisions itself as a God-glorifying, Christ-shepherding, and Holy Spirit-filled church in fulfilling God's Mission in the city.",
  },
  MISSION_STATEMENT: {
    title: "Mission",
    description:
      "A church that shares God's good news of Christ's redeeming love by reaching out to people, experiencing new life in Him, and growing in Christlikeness.",
  },
  MISSION_STATEMENT_EXTENDED: {
    title: "Mission Statement",
    description:
      "To reach out to as many people as we possibly can to share with them the good news of God's redeeming love in Jesus Christ. To lead them to that new life of faith, trust, love, and obedience to Jesus Christ. And to continue nurturing them to become Christ-like in their lives.",
  },
  STATEMENT_OF_COMMITMENT: {
    title: "Statement of Commitment",
    description:
      " We, the members of Calgary Filipino Methodist Church, an ethnic congregation, in response to God's love in Jesus Christ and by the power of the Holy Spirit, seek to be faithful in our discipleship and ministry to the community. In order to faithfully carry out the mission of Jesus Christ in the world through ministries among our brethren, and in accordance with the Doctrines and Social Principles of the Methodist Church, we shall establish and implement these governing by-laws.",
  },
  CFMC_MOTTO: {
    title: "CFMC Motto",
    description: "Love God, Love People. Proclaim the Good News of Christ.",
  },
  CFMC_MOTTO_EXTENDED: {
    title: "CFMC Motto",
    description:
      "Calgary Filipino Methodist Church exists to love God who first loved us, and to love people by faithfully, holistically, boldly, and joyfully proclaiming the Good News of Christ to all.",
  },
  OUR_COMMUNITY: {
    title: "Our Community",
    description:
      "The community of Calgary Filipino Methodist Church is a warm, Christ-centered family of believers rooted in Filipino faith and culture. United in love and service, we gather to worship, grow in God's Word, and support one another through life's journeys. Our fellowship is marked by hospitality, prayer, and joyful worship, as we seek to reflect Christ's light in our homes, church, and the wider Calgary community. Together, we are building a legacy of faith for future generations.",
  },
  OUR_MINISTRY: {
    title: "Our Ministry",
    description:
      "The ministry of Calgary Filipino Methodist Church flows from our deep love for God and commitment to serve others. Rooted in Scripture and empowered by the Holy Spirit, we serve through vibrant worship, discipleship, fellowship, and outreach. Our ministries nurture faith across all ages—from children to seniors—through Bible studies, prayer gatherings, care groups, and special events. We are passionate about building strong families, mentoring the next generation, and reaching our community with the compassion and truth of Jesus Christ. Every act of service is an opportunity to glorify God and extend His grace to others.",
  },
  WHAT_WE_BELIEVE: {
    title: "What We Believe",
    description:
      "We believe in one holy, eternal God—Father, Son, and Holy Spirit—who created all things and alone is worthy of our worship and obedience. Jesus Christ, fully God and fully man, lived a perfect life, died for our sins, rose again, and now reigns as Lord, offering salvation to all who believe. ",
  },
};
