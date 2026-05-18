export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  timeframe: string;
  status: string;
  stack: string[];
  problem: string;
  solution: string;
  impact: string[];
  note?: string;
  liveUrl?: string;
  repoUrl?: string;
  accentFrom: string;
  accentTo: string;
};
