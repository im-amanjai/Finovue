import React, { useEffect, useState } from "react";
import DashBoard from "./Dashboard";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get("https://finovue.onrender.com/auth/verify", {
          withCredentials: true,
        });

        const { status, user } = response.data;

        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, { position: "top-right" });
        } else {
          window.location.href = "https://finovuee.netlify.app/login";
        }
      } catch (error) {
        console.error("Auth verification failed", error);
        window.location.href = "https://finovuee.netlify.app/login"; 
      } finally {
        setIsLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (isLoading) {
    return <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>;
  }

  return <DashBoard username={username} />;
};

export default Home;
