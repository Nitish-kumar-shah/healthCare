import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => console.log("logout componentts ", error));
  };
  return (
    <button
      className="bg-red-400 text-[18px] inline-block px-6 py-2 duration-200 hover:scale-120 hover:text-white rounded-full cursor-pointer"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
