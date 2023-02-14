import ApiEndpoints from "@/core/apiEndpoints";
import httpClient from "@/core/axios";

export const search = async () => {
  try {
    const response = await httpClient().get(ApiEndpoints.search);
    if (response.status > 201 || !response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    dispatch(setErrorMessage(error.message));
    return false;
  }
};

export const getfilter = async () => {
  try {
    const response = await httpClient().get(ApiEndpoints.getfilter);
    if (response.status > 201 || !response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    dispatch(setErrorMessage(error.message));
    return false;
  }
};

export const updatefilter = async () => {
  try {
    const response = await httpClient().get(ApiEndpoints.filter);
    if (response.status > 201 || !response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    dispatch(setErrorMessage(error.message));
    return false;
  }
};
