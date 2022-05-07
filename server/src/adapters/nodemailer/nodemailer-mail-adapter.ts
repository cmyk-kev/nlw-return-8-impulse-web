import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c0bff88218e5bc",
    pass: "89a254240aee26"
  }
});


export class NodemailerMailAdapter implements MailAdapter{

  async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
      from:'Equipe Feedget <oi@feedget.com>',
      to: 'Kevin Felix <kevinsfelix@gmail.com>',
      subject,
      html: body,
    })
  }
}