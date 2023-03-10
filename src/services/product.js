import ApiEndpoints from "@/core/apiEndpoints";
import httpClient from "@/core/axios";
import { unstable_batchedUpdates } from "react-dom";

export const allproducts = async (query) => {
  try {
    const response = await httpClient().get(ApiEndpoints.product, {
      params: {
        page: 1,
        query: query,
      },
    });
    if (response.status > 201 || !response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    dispatch(setErrorMessage(error.message));
    return false;
  }
};

export const categoryproducts = async (query, category) => {
  try {
    const response = await httpClient().get(
      ApiEndpoints.productcategory + `${category}`,
      {
        params: {
          page: 1,
          query: query,
        },
      }
    );
    if (response.status > 201 || !response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    dispatch(setErrorMessage(error.message));
    return false;
  }
};

export const brandproducts = async (query, brand) => {
  try {
    const response = await httpClient().get(
      ApiEndpoints.productbrand + `${brand}`,
      {
        params: {
          page: 1,
          query: query,
        },
      }
    );
    if (response.status > 201 || !response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    dispatch(setErrorMessage(error.message));
    return false;
  }
};

export const categorybrandproducts = async (query, brand, category) => {
  try {
    const response = await httpClient().get(
      ApiEndpoints.productcategorybrand + `${category}/${brand}`,
      {
        params: {
          page: 1,
          query: query,
        },
      }
    );
    if (response.status > 201 || !response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    dispatch(setErrorMessage(error.message));
    return false;
  }
};

export const productdetails = async (id) => {
  const resp = await httpClient().get(ApiEndpoints.productdetails + id);
  return resp.data;
};
