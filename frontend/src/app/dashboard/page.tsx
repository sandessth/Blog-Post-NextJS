import React from "react";

function Dashboard() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center text-xl text-bold font-mono pt-5">
        <h1 className="mt-2">Enjoy The Super Cool Blog Pictures</h1> <br />
        <img
          className="h-40vph m-5 mt-1 border-black rounded"
          src="https://picsum.photos/500"
          alt="random photo from lorem picsum website"
        />
      </div>
    </div>
  );
}

export default Dashboard;
