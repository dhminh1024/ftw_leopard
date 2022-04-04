import React from "react";
import Logo from "../components/Logo";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Logo sx={{ width: 200, height: 200 }} disableLink={true} />
    </div>
  );
}

export default HomePage;
