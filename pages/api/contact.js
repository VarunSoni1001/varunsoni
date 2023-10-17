import { transporter, emailOptions } from "@/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: "Bad Request" });
    }

    try {
      await transporter.sendMail({
        ...emailOptions,
        subject: "New contact form submission from Portfolio site",
        text: "This is a new contact form submission",
        replyTo: data.email,
        html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                  /* Reset some default styles */
                  body, html, *{
                      margin: 0;
                      padding: 0;
                  }
                  
                  /* Container to center content */
                  .container {
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 20px;
                      background-color: rgb(253, 244, 255);
                      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
                      border-radius: 5px;
                  }
                  
                  /* Header styles */
                  .header {
                    background-color: rgb(112, 26, 117);
                      color: #fff;
                      text-align: center;
                      padding: 10px 0;
                      border-radius: 15px;
                      margin-bottom: 20px;
                  }
                  
                  /* Content styles */
                  .content {
                      padding: 5px;
                  }

                  .mainMessage{
                    font-size: 15px;
                  }
                  
                  /* Message styles */
                  .message {
                      font-size: 18px;
                      line-height: 1.6;
                      margin-bottom: 20px;
                  }

                  /* Contact details styles */
                  .contact-details {
                      font-size: 16px;
                      margin-top: 20px;
                  }
              </style>
          </head>
          <body>
            <div className="container">
              <div className="header">
                  <h1>New Contact Form Submission</h1>
              </div>
              <div className="content">
                <p className="message">Hi there,<br><br>
                  <strong>${data.name}</strong> has sent you a message from your portfolio site.
                  <br>
                  <br>
                    Here is what they wanted to say:
                  <br>
                  <p className="mainMessage">
                    " ${data.message} "
                  </p>
                </p>
                <p className="contact-details">You can reply to 
                  <strong>
                    ${data.name}
                  </strong>
                   at 
                  <a href="mailto:${data.email}">
                  ${data.email}
                  </a>
                </p>
              </div>
            </div>
          </body>
        </html>
        `,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: "Bad Request" });
};

export default handler;
