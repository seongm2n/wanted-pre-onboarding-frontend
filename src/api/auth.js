import { axiosJsonInstance } from '../config/axios';

// signin
export const signIn = async ({ email, password }) => {
  try {
    const payload = {
      email: email,
      password: password,
    };

    const { data } = await axiosJsonInstance.post('/auth/signin', payload);
    const accessToken = data.access_token;
    localStorage.setItem('access_token', accessToken);
    return { data };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// signup
export const signUp = async ({ email, password }) => {
  try {
    const payload = {
      email: email,
      password: password,
    };
    const { data } = await axiosJsonInstance.post('/auth/signup', payload);
    const accessToken = data.access_token;
    localStorage.setItem('access_token', accessToken);
    return { data };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
