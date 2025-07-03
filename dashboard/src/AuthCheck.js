import { useEffect } from "react";

const AuthCheck = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "http://localhost:3000/login";
    }
  }, []);

  return null;
};

export default AuthCheck;
