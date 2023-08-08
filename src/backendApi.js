import axios from 'axios';

export const logIn = async (avatarId) => {
  try {
    await axios.post('/api/login', { avatarId: avatarId });
  } catch (e) {
    throw e;
  }
}

export const logOut = async () => {
  try {
    await axios.post('/api/logout');
  } catch (e) {
    throw e;
  }
}