import ApiEndpoints from "@/core/apiEndpoints";
import httpClient from "@/core/axios";

export const GetOrder = async () => {
  const response = await httpClient().get(ApiEndpoints.order);
  return response.data;
};

export const AddOrder = async (data) => {
  const response = await httpClient().post(ApiEndpoints.order);
  return response.data;
};

export const CancelOrder = async (id) => {
  const response = await httpClient().patch(ApiEndpoints.cancelorder + id);
  return response.data;
};

export const RejectOrder = async (id) => {
  const response = await httpClient().patch(ApiEndpoints.rejectorder + id);
  return response.data;
};

export const ReturnOrder = async (id) => {
  const response = await httpClient().patch(ApiEndpoints.returnorder + id);
  return response.data;
};
