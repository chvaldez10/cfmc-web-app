import historyData from "@/data/history.json";

export interface TimelineEvent {
  description: string;
}

export interface HistorySection {
  historySectionTitle: string;
  events: TimelineEvent[];
}

export interface ChurchHistoryRoot {
  historyName: string;
  historySections: HistorySection[];
}

export const CHURCH_HISTORY: ChurchHistoryRoot =
  historyData as ChurchHistoryRoot;

export const HISTORY_CONTENT: { title: string; description: string }[] = [
  {
    title: "History",
    description:
      "Discover the rich heritage and journey of our church, from its biblical roots through the Methodist revival to our establishment in Calgary.",
  },
];
