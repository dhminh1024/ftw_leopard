import React from "react";
import Profile from "../features/user/Profile";
import useAuth from "../hooks/useAuth";

function HomePage() {
  const { user } = useAuth();

  return (
    <div>
      <Profile profile={user} />
    </div>
  );
}

export default HomePage;
