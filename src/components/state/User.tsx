import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // 1st way
  // const [user, setUser] = useState<AuthUser>({} as AuthUser);

  // 2nd way
  const [user, setUser] = useState<AuthUser | null>(null);

  // 3rd way
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    // 1st and 2nd way
    setUser({
      name: "Prem",
      email: "prem@gmail.com",
    });

    // 3rd way
    userContext.setUser({
      name: "Prem",
      email: "prem@gmail.com",
    });
  };
  const handleLogout = () => {
    // 1st and 2nd way
    setUser(null);

    // 3rd way
    userContext.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      {/* 1st way */}
      {/* <div>User name is {user.name}</div>
      <div>User email is {user.email}</div> */}

      {/* 2nd way */}
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>

      {/* 3rd way */}
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );
};
