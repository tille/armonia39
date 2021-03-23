const functions = require('firebase-functions');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

const cors = require('cors')({
    origin: true
});

exports.helloWorld = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
       
        return Promise.resolve()
        .then(() => {
          if (req.method !== 'POST') {
            const error = new Error('Only POST requests are accepted');
            error.code = 405;
            throw error;
          }
    
          const message = {
            to: req.body.to,
            from: req.body.from,
            subject: req.body.subject,
            text: req.body.text,
            html: req.body.html
          };
      
          return sgMail.send(message);
          
        })
        .then((response) => {
          if (response.body) {
            res.send(response.body);
          } else {
            res.end();
          }
        })
        .catch((err) => {
          console.error(err);
          return Promise.reject(err);
        });

    })
});
