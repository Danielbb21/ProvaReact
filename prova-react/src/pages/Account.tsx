import React from "react";
import { useEffect } from "react";

import UserInfo from "../components/UserInfo";
import { useAppDispatch, useAppSelector } from "../store/store-hooks";
import { getUserInfo } from "../store/UserSlice";

const Account: React.FC = () => {
  // const users = useAppSelector(state => state.user.users);

  return (
    <>
      <UserInfo></UserInfo>
    </>
  );
};

export default Account;
