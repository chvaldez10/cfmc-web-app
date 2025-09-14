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
