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
  static getcart = `${this.cart}/customer`;

  static deletecart = `${this.cart}/`;
  static alldeletecart = `${this.cart}/delete/all`;
  static decrementcart = `${this.cart}/decrement-quantity/`;
  static incrementcart = `${this.cart}/increment-quantity/`;
  static statuscart = `${this.cart}/change-status`;

  static product = `${this.baseURL}/product?`;
  static productdetails = `${this.baseURL}/product/`;
  static productcategory = `${this.baseURL}/product/category/`;
  static productbrand = `${this.baseURL}/product/brand/`;
  static productcategorybrand = `${this.baseURL}/product/category-brand/`;

  static order = `${this.baseURL}/order`;

  static getorder = `${this.order}/customer`;
  static returnorder = `${this.order}/return/`;
  static rejectorder = `${this.order}/reject/`;
  static cancelorder = `${this.order}/cancel/`;

  // static getsearch = `/getsearch`;

  
  // static homedata = `/homedata`;
}

export default ApiEndpoints;
