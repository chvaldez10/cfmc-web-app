export interface Ministry {
  id: string;
  title: string;
  description: string;
  verse: {
    text: string;
    reference: string;
  };
  contact?: {
    name: string;
    phone: string;
  };
  contacts?: Array<{
    name: string;
    phone: string;
  }>;
}

export const ministries = {
  DISCIPLESHIP: {
    id: "discipleship",
    title: "Discipleship Ministries",
    description:
      "Making disciples of all nations through teaching and baptism, following the Great Commission.",
    verse: {
      text: "Then Jesus came to them and said, 'All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.'",
      reference: "Matthew 28:18-20 (NIV)",
    },
  },
  CHILDREN: {
    id: "children",
    title: "Children Ministry",
    description:
      "Nurturing the faith of our youngest members and helping them grow in Christ.",
    verse: {
      text: "Jesus said, 'Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.'",
      reference: "Matthew 19:14 (NIV)",
    },
    contact: {
      name: "Deaconess Wendy Valdez",
      phone: "368-995-8928",
    },
  },
  YOUTH: {
    id: "youth",
    title: "Youth & Young Adults Fellowship",
    description:
      "Empowering young believers to set an example in speech, conduct, love, faith, and purity.",
    verse: {
      text: "Don't let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
      reference: "1 Timothy 4:12 (NIV)",
    },
    contact: {
      name: "Pastor Jonavern",
      phone: "587-888-4216",
    },
  },
  MENS_FELLOWSHIP: {
    id: "mens-fellowship",
    title: "Men's Fellowship",
    description:
      "Building men of God who pursue righteousness, godliness, faith, love, endurance and gentleness.",
    verse: {
      text: "But you, man of God, flee from all this, and pursue righteousness, godliness, faith, love, endurance and gentleness. Fight the good fight of the faith. Take hold of the eternal life to which you were called when you made your good confession in the presence of many witnesses.",
      reference: "1 Timothy 6:11-12 (NIV)",
    },
    contact: {
      name: "Bro. June Tugade",
      phone: "587-223-5710",
    },
  },
  WOMENS_FELLOWSHIP: {
    id: "womens-fellowship",
    title: "Women's Fellowship",
    description:
      "Celebrating women who fear the Lord and encouraging spiritual growth and community.",
    verse: {
      text: "Charm is deceptive, and beauty does not last; but a woman who fears the Lord will be greatly praised.",
      reference: "Proverbs 31:30 (NLT)",
    },
    contact: {
      name: "Sis. Luz Tugade",
      phone: "403-771-1826",
    },
  },
  PRAISE_WORSHIP: {
    id: "praise-worship",
    title: "Praise & Worship Team",
    description:
      "Leading the congregation in joyful worship and thanksgiving through music and song.",
    verse: {
      text: "Come, let us sing for joy to the LORD; let us shout aloud to the Rock of our salvation. Let us come before him with thanksgiving and extol him with music and song.",
      reference: "Psalm 95:1-2 (NIV)",
    },
    contacts: [
      {
        name: "Deaconess Nelia Soriano",
        phone: "403-880-9753",
      },
      {
        name: "Sis. Zarah May Reyes",
        phone: "403-771-8852",
      },
    ],
  },
  MULTIMEDIA: {
    id: "multimedia",
    title: "Multimedia Team",
    description:
      "Spreading the good news through technology and media, ensuring the message reaches those who need to hear.",
    verse: {
      text: "How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard? And how can they hear without someone preaching to them? And how can anyone preach unless they are sent? As it is written: 'How beautiful are the feet of those who bring good news!'",
      reference: "Romans 10: 14-15 (NIV)",
    },
    contact: {
      name: "Bro. Christian Valdez",
      phone: "204-898-7498",
    },
  },
  OUTREACH: {
    id: "outreach",
    title: "Outreach Ministry",
    description:
      "Serving the least of these through practical acts of love and compassion, including free bread distribution.",
    verse: {
      text: "The King will reply, 'Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.'",
      reference: "Matthew 25:40 (NIV)",
    },
    contact: {
      name: "Bro. Vincent Vinluan",
      phone: "403-629-7784",
    },
  },
};

// Helper function to get all ministries as an array (for mapping/iterating)
export const ministriesArray: Ministry[] = Object.values(ministries);

// Type for ministry keys
export type MinistryKey = keyof typeof ministries;
