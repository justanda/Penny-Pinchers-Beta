import { type JwtPayload, jwtDecode } from "jwt-decode";
import type { CustomerLogin } from "../interfaces/CustomerLogin";

class authUser {
  getUser() {
    return jwtDecode<CustomerLogin>(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token;
  }

  isTokenExpired(token: string) {
    try {
      // Attempt to decode the provided token using jwtDecode, expecting a JwtPayload type.
      const decoded = jwtDecode<JwtPayload>(token);
      // Check if the decoded token has an 'exp' (expiration) property and if it is less than the current time in seconds.
      if (decoded?.exp && decoded?.exp < Date.now() / 1000) {
        // If the token is expired, return true indicating that it is expired.
        return true;
      }
    } catch (err) {
      // If decoding fails (e.g., due to an invalid token format), catch the error and return false.
      return false;
    }
  }

  getToken() {
    const loggedIn = localStorage.getItem("loggedIn") || "";
    return loggedIn;
  }

  login(idtoken: string) {
    localStorage.setItem("loggedIn", idtoken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("loggedIn");
    window.location.assign("/");
  }
}

export default new authUser();
