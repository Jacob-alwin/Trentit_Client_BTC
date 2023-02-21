import ApiEndpoints from "@/core/apiEndpoints";
import httpClient from "@/core/axios";

export const AddCart = async (product_id) => {
  const response = await httpClient().post(ApiEndpoints.cart, {
    product: product_id,
  });
  return response.data;
};

export const GetCart = async () => {
  const response = await httpClient().get(ApiEndpoints.getcart);
  return response.data;
};

export const IncrementCartItem = async (id) => {
  console.log(id);
  const response = await httpClient().patch(ApiEndpoints.incrementcart + id);
  return response.data;
};

export const DecrementCartItem = async (id) => {
  const response = await httpClient().patch(ApiEndpoints.decrementcart + id);
  return response.data;
};

export const RemoveCartItem = async (id) => {
  const response = await httpClient().delete(ApiEndpoints.deletecart + id);
  return response.data;
};
