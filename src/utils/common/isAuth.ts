const isAuth = () => {
  if (localStorage.getItem("token")) {
    const token = JSON.parse(localStorage.getItem("token"));
    return token;
  } else {
    // console.log("no token");
    return false;
  }
};

export default isAuth;
