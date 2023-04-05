import axios from 'axios';

const ENDPOINTS = {
  participant: 'participant/',
  question: 'question/',
  answers: 'question/answers/',
};

const API_URL = `${process.env.REACT_API_BASE_URL}api/`;

const api = axios.create({
  baseURL: API_URL,
});

const createAPIEndpoint = (endpoint) => {
  return {
    fetch: () => api.get(endpoint),
    fetchById: (id) => api.get(endpoint + id),
    post: (newRecord) => api.post(endpoint, newRecord),
    put: (id, updatedRecord) => api.put(endpoint + id, updatedRecord),
    delete: (id) => api.delete(endpoint + id),
  };
};

export const participantsAPI = createAPIEndpoint(ENDPOINTS.participant);
export const questionsAPI = createAPIEndpoint(ENDPOINTS.question);
export const answersAPI = createAPIEndpoint(ENDPOINTS.answers);

export const getImageUrl = (imageName) => {
  const imagePath = imageName || 'default';
  return `${process.env.REACT_API_BASE_URL}images/${imagePath}`;
};
