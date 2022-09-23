import onOpen from './onOpen';
import sendEmail from './send';
import showCredits from './showCredits';
import showSidebar from './sidebar';
import doGet from './webapp';

global.onOpen = onOpen;
global.showSidebar = showSidebar;
global.sendEmail = sendEmail;
global.showCredits = showCredits;
global.doGet = doGet;
