export interface FeedbackCreateDta{
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository{
  create: (data: FeedbackCreateDta) => Promise<void>;
}