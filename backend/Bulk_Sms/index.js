const dotenv = require('dotenv');

dotenv.config();
// Set your app credentials
const credentials = {
  apiKey: process.env.API_KEY,
  username: process.env.APP_NAME,
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;
const recepients = [
  {
    name: 'Festus',
    phone: '+2547xxxxx'
  },
  {
    name: 'Julie',
    phone: '+2547xxxxx'
  }
];

function sendMessage() {
  recepients.map((recepient) => {
    const options = {
      to: recepient.phone,
      message: `Hi ${recepient.name},
                This is a test on the customization of messages, while dispatching in bulk by DevFestus.`,
      //from: 'DevFestus'
  }

  sms.send(options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  
}

sendMessage();