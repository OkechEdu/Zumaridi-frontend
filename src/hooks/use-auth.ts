export const useAuth = () => {
  // get item from localstorage
  let user: any;
  const _user = localStorage.getItem("user");

  if (_user) {
    user = JSON.parse(_user);
    console.log("user", user);
  }
  if (user) {
    return {
      auth: true
    };
  } else {
    return {
      auth: false
    };
  }
};
