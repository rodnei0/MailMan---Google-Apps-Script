function getGmailAliasList() {
  const aliases = GmailApp.getAliases();
  aliases.push(Session.getActiveUser().getEmail());
  return aliases;
}

export default getGmailAliasList;
