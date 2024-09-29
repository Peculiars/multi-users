"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const EditorDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    if (userType !== "editor") {
      router.push("/login");
    }
  }, []);

  return (
    <div className="dashboard-container">
        <div>
            <h1 className="welcome-text">Welcome to the Editor Dashboard</h1>
        </div>
    </div>
  )
};

export default EditorDashboard;
