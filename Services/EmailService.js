const nodeMailer = {
  async sendMail(mailTo, mailSubject, mailHtml) {
    try {
      var mailOtions = {
        from: "avani@techtic.agency",
        to: mailTo,
        // to: "techtic.avani@gmail.com",
        subject: mailSubject,
        HtmlBody: mailHtml
      };
      console.log(mailOtions)
  
      // Require:
      var postmark = require("postmark");
  
      // Send an email:
      const client = new postmark.ServerClient("fa946ba2-f34e-4275-98c0-fb7ff3898111");  
      client.sendEmail(mailOtions);
    } catch (error) {
      console.log(error)
    }
  }
};

module.exports = nodeMailer;
