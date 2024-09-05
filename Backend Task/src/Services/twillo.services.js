import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const makeIVRCall = (toPhoneNumber) => {
  twilioClient.calls.create({
    to: toPhoneNumber,
    from: process.env.TWILIO_PHONE_NUMBER,
    twiml: `
      <Response>
        <Play>https://onedrive.live.com/?authkey=%21AEm9E0JuXEPP2EE&id=6D834994D9580DCB%21245717&cid=6D834994D9580DCB&parId=root&parQt=sharedby&o=OneUp</Play>
        <Gather action="/handleResponse" method="POST" numDigits="1" />
      </Response>`
  }).then(call => console.log(call.sid))
    .catch(err => console.error(err));
};

export const handleIVRResponse = (req, res) => {
  const { Digits, To } = req.body;

  if (Digits === '1') {
    twilioClient.messages.create({
      body: 'Thank you for your interest! Here is your interview link: https://v.personaliz.ai/?id=9b697c1a&uid=fe141702f66c760d85ab&mode=test',
      from: process.env.TWILIO_PHONE_NUMBER,
      to: To,
    }).then(message => console.log(message.sid))
      .catch(err => console.error(err));
  }

  res.send('<Response><Say>Thank you!</Say></Response>');
};
