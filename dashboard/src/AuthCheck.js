import { useEffect } from "react";
import axios from "axios";

const AuthCheck = () => {
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get("https://finovue.onrender.com/auth/verify", {
          withCredentials: true,
        });

        if (!response.data.status) {
          window.location.href = "https://finovuee.netlify.app/login"; // Redirect to frontend login
        }
      } catch (error) {
        console.error("Verification failed:", error);
        window.location.href = "https://finovuee.netlify.app/login";
      }
    };

    verifyUser();
  }, []);

  return null;
};

export default AuthCheck;
