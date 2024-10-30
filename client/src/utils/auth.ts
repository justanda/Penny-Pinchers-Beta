class authUser {
  loggedIn() {
    const token = this.getToken();
    return token;
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
