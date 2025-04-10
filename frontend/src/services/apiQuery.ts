import apiClient from "./apiClient";

export const userLogin = async (payload: any) => {
  await apiClient.post("/auth", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getReports = async () => {
  return await apiClient.get("/report", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const uploadReport = async (payload: any) => {
  await apiClient.post("/report", payload);
};
export const deleteReport = async (payload: any) => {
  await apiClient.delete(`/report/${payload.id}`);
};
