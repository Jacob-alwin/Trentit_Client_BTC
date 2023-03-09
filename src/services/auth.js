import ApiEndpoints from "@/core/apiEndpoints";
import httpClient from "@/core/axios";
import { LocalStorageKeys } from "@/core/localStorageKeys";
import { dispatch } from "@/redux/store";

export const signin = async (data) => {
  try {
    const response = await httpClient().post(ApiEndpoints.signup, data);
    if (response.status > 201 || !response.data.success) {
      throw new Error(response.data.message);
    }
    localStorage.setItem(LocalStorageKeys.userToken, response.data.token);
    console.log(response.data.token);
    return response.data;
  } catch (error) {
    dispatch(setErrorMessage(error.message));
    return false;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await httpClient().get(ApiEndpoints.profile);
    if (response.status > 201 || !response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    dispatch(setErrorMessage(error.message));
    return false;
  }
};

export const updateProfile = async (data) => {
  try {
    const response = await httpClient().post(ApiEndpoints.updateprofile, data);
    if (response.status > 201 || !response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    dispatch(setErrorMessage(error.message));
    return false;
  }
};
