import { throws } from "assert";
import { error } from "console";
import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot: string;
}

export class SubmitFeedbackUseCase {

    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private nodemailerAdapter: MailAdapter
        ) { }
    

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, comment, screenshot } = request;
        if(!type){
            throw new Error("Type is required.")
        }
        if(!comment){
            throw new Error("comment is required.")
        }

        if(screenshot && !screenshot.startsWith('data:image/pang;base64')){
            throw new Error("invalid screenshot format.")
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })

        await this.nodemailerAdapter.sendEmail({
            subject: "Novo Feedback",
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`
            ].join('\n')
        })
    }

  
}