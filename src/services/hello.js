import ApiEndpoints from "@/core/apiEndpoints";
import httpClient from "@/core/axios";

export const hello = async () => {
  const response = await httpClient().get(ApiEndpoints.hello);
  console.log(response);
  return response.data;
};
