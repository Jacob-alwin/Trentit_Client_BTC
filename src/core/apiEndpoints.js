class ApiEndpoints {
  static serverURL =
    process.env.REACT_APP_SERVER_URL || "https://btc.server.trentit.in";
  static baseURL = `${this.serverURL}/api/v1`;
  // static baseURL = `/api/v1`;

  static gethomeddata = `${baseURL}/homedata`;

  static signup = `${baseURL}/user/signup`;
  static setfirebase = `${baseURL}/user/set-ftoken`;
  static checkfirebase = `${baseURL}/user/check-ftoken/Primary`;
  static editprofile = `${baseURL}/user/profile`;
  static getprofile = `${baseURL}/user/profile`;

  static cart = `${baseURL}/cart`;
  static getcart = `${baseURL}/cart`;
  static deletecart = `${baseURL}/cart/63e88aeee2eb95eb1f572c76`;
  static alldeletecart = `${baseURL}/cart/delete/all`;
  static decrementcart = `${baseURL}/cart/decrement-quantity/`;
  static incrementcart = `${baseURL}/cart/increment-quantity/`;
  static statuscart = `${baseURL}/cart/change-status/63e88aeee2eb95eb1f572c76`;

  static product = `${baseURL}/product?page=1&limit=10`;
  static productdetails = `${baseURL}/product/63e21b23ca8ce7cc8d1fde74`;
  static productdetails = `${baseURL}/product/63e21b23ca8ce7cc8d1fde74`;

  static getorder = `${baseURL}/getorder`;

  // static getsearch = `/getsearch`;

  static getfilter = `/getfilter`;
  static updatefilter = `/updatefilter`;

  // static homedata = `/homedata`;
}

export default ApiEndpoints;
