import account from './account.json';
import meeting from './meeting.json';
import notifications from './notifications.json';
import requests from './requests.json';

export function services(service) {
  switch(service) {
    case "account":
      return account;
    case "meeting":
      return meeting;
    case "notifications":
      return notifications;
    case "requests":
      return requests;
    default:
      return;
  }
}