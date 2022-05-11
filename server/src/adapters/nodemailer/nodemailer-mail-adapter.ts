import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a3659fdea2c1d7",
        pass: "f864cc4b672970"
    }
});

export class NodemailerMailAdapter implements MailAdapter {


    async sendEmail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'equipe feedbacks <feedback@thinness.com.br> ',
            to: 'Paulo Henrique <paulo@thinness.com.br>',
            subject,
            html: body
        })
    }
} 