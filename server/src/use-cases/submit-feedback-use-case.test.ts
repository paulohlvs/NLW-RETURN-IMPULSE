import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendEmail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {

        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "tudo do teste",
            screenshot: "data:image/png;base64,asdgadshhadhadhdsahadlkjljpg",

        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();        
    })
    it('should not be able to submit a feedback without type', async () => {

        await expect(submitFeedback.execute({
            type: "",
            comment: "alou passei no test sem type",
            screenshot: "data:image/png;base64,asdgadshhadhadhdsahadlkjljpg",

        })).rejects.toThrow();
    })
    it('should not be able to submit a feedback without comment', async () => {

        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "",
            screenshot: "data:image/png;base64,asdgadshhadhadhdsahadlkjljpg",

        })).rejects.toThrow();
    })
    it('should not be able to submit a feedback with an invalid screencshot', async () => {

        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "coment",
            screenshot: "js.jpg",

        })).rejects.toThrow();
    })
})