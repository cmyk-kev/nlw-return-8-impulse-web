import { prisma } from "../../prisma";
import {FeedbackCreateDta, FeedbacksRepository} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
  async create({type,comment,screenshot}: FeedbackCreateDta){
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })
  }
}