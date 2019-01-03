import Auth0 from "auth0-js";
import AUTH0_CONFIG from "./auth.config";

export const auth0 = new Auth0.WebAuth(AUTH0_CONFIG);

export function login() {
  auth0.authorize();
}

export function isAuthenticated() {
  const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
}
