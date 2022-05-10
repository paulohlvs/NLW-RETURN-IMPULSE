import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a3659fdea2c1d7",
        pass: "f864cc4b672970"
    }
});

routes.post('/feedbacks', async (req, res) => {

    const { type, comment, screenshot } = req.body
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const submitFeedbacksUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository)

    await submitFeedbacksUseCase.execute({
        type,
         comment, 
        screenshot
    })
    // await transport.sendMail({
    //     from: 'equipe feedbacks <feedback@thinness.com.br> ',
    //     to: 'Paulo Henrique <paulo@thinness.com.br>',
    //     subject: 'Novo Feedback',
    //     html: [
    //         '<div style="font-family: sans-serife; font-size: 16px; color: #111">',
    //         `<p>Tipo de Feedback: ${type}</p>`,
    //         `<p>Comentario: ${comment}</p>`,
    //     ].join('\n')
    // })

    return res.status(201).send()
})
