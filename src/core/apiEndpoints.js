class ApiEndpoints {
  static serverURL =
    process.env.REACT_APP_SERVER_URL || "https://server.trentit.in";
  // static baseURL = `${this.serverURL}/api/v1`;
  static baseURL = `/api`;

    static hello = `/hello`;
}

export default ApiEndpoints;
