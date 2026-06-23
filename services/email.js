import nodemailer from 'nodemailer';
import ejs from 'ejs';

let transporter;

(async () => {
    const account = await nodemailer.createTestAccount();

    transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass,
        },
    });
})();

export default async (to, subject, template, data) => {
    const html = await ejs.renderFile(
        `views/email/${template}.ejs`,
        { data }
    );

    const info = await transporter.sendMail({
        from: '"Mini Blog" <test@test.com>',
        to,
        subject,
        html,
    });

    console.log(
        'Preview URL:',
        nodemailer.getTestMessageUrl(info)
    );
};