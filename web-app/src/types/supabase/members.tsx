export type ChurchMembers = {
  id: number;
  birthDate?: Date;
  isActive: boolean;
  isBoardMember: boolean;
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
  image?: string;
};
