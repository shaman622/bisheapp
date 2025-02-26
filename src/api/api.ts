import axios from 'axios';

const API_BASE_URL = 'https://your-api-endpoint.com/api';

// 上传文件
export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// 获取统计数据
export const getStatistics = async () => {
  const response = await axios.get(`${API_BASE_URL}/statistics`);
  return response.data;
};

// 提交参数
export const submitParams = async (params: { option: string; value: string }) => {
  const response = await axios.post(`${API_BASE_URL}/submit`, params);
  return response.data;
};