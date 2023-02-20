class ApiEndpoints {
  static serverURL =
    process.env.REACT_APP_SERVER_URL || "https://btc.server.trentit.in";
  static baseURL = `${this.serverURL}/api/v1`;
  // static baseURL = `/api/v1`;

  static gethomeddata = `${this.baseURL}/homedata`;

  static user = `${this.baseURL}/user`;

  static signup = `${this.user}/signup`;
  static setfirebase = `${this.user}/set-ftoken`;
  static checkfirebase = `${this.user}/check-ftoken/Primary`;
  static editprofile = `${this.user}/profile`;
  static getprofile = `${this.user}/profile`;

  static cart = `${this.baseURL}/cart`;
  static getcart = `${this.baseURL}/cart`;

  static deletecart = `${this.cart}/63e88aeee2eb95eb1f572c76`;
  static alldeletecart = `${this.cart}/delete/all`;
  static decrementcart = `${this.cart}/decrement-quantity/`;
  static incrementcart = `${this.cart}/increment-quantity/`;
  static statuscart = `${this.cart}/change-status`;

  static product = `${this.baseURL}/product?`;
  static productdetails = `${this.baseURL}/product/`;

  static getorder = `${this.baseURL}/order/customer`;

  // static getsearch = `/getsearch`;

  static getfilter = `${this.baseURL}/getfilter`;
  static updatefilter = `${this.baseURL}/updatefilter`;

  // static homedata = `/homedata`;
}

export default ApiEndpoints;
