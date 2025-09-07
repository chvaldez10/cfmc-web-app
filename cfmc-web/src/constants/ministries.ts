export interface Ministry {
  id?: string;
  title: string;
  description: string;
  isQuote?: boolean;
  verse?: {
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

import ministriesContentData from "@/data/ministries-content.json";

export const MINISTRIES_CONTENT = ministriesContentData as Record<
  string,
  Ministry
>;

export const ministriesArray: Ministry[] = Object.values(MINISTRIES_CONTENT);
export type MinistryKey = keyof typeof MINISTRIES_CONTENT;
