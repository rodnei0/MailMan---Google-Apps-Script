import getGmailAliasList from './alias';

function showSidebar() {
  const template = HtmlService.createTemplateFromFile('index');
  template.aliases = getGmailAliasList();
  const html = template.evaluate().setTitle('MailMan');
  SpreadsheetApp.getUi().showSidebar(html);
}

export default showSidebar;
