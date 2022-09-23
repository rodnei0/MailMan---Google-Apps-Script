function sendEmail(data) {
  const { from, to, subject, body } = data;
  try {
    GmailApp.sendEmail(to, subject, body);
  } catch (f) {
    Logger.log(f);
    try {
      MailApp.sendEmail(to, subject, body);
    } catch (error) {
      return `Error: ${error.toString()}`;
    }
  }
  return `Email sent to ${to}`;
}

export default sendEmail;
