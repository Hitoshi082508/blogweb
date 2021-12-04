import * as sendgrid from '@sendgrid/mail';

export default async function send(req) {
  const sgMail = sendgrid;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY); //SendGridのAPIキー

  const { name, tel, email, text } = req.body;

  const msg = {
    to: email,
    from: 'hitoshi082508@gmail.com',
    subject: 'お問い合わせを受け付けました。',
    text: `${name}様からのお問い合わせを受け付けました。${text} ${tel}`,
    html: `<p>${name}様からのお問い合わせを受け付けました</p><br /><p>${text}</p><br /><p>電話番号：${tel}</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {})
    .catch((error) => {});
}
