import User from '../user';
import Storage from '../storage';

const isAuthenticated = async () => {
  const user = await User.getUser();
  const token = Boolean(await User.getUserToken());
  return user !== null && token === true;
};

const logout = () => (
  Storage.dropStorage()
);

export default {
  isAuthenticated,
  logout,
};