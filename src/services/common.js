import ApiEndpoints from "@/core/apiEndpoints";
import httpClient from "@/core/axios";

export const homedata = async () => {
  const response = await httpClient().get(ApiEndpoints.homedata);
  console.log(response);
  return response.data;
};

export const details = async () => {
  const response = await httpClient().get(ApiEndpoints.details);
  console.log(response);
  return response.data;
};

export const getprofile = async () => {
  const response = await httpClient().get(ApiEndpoints.profile);
  console.log(response);
  return response.data;
};

export const updateprofile = async () => {
  const response = await httpClient().get(ApiEndpoints.updateprofile);
  console.log(response);
  return response.data;
};



export const cart = async () => {
  const response = await httpClient().get(ApiEndpoints.cart);
  console.log(response);
  return response.data;
};

export const order = async () => {
  const response = await httpClient().get(ApiEndpoints.order);
  console.log(response);
  return response.data;
};

// export const  = async () => {
//   const response = await httpClient().get(ApiEndpoints.);
//   console.log(response);
//   return response.data;
// };
