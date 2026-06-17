"use client";

import { useState } from "react";
import AuthBox from "./auth";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        padding: "40px 20px",
        textAlign: "center"
      }}
    >
      <h1 style={{ marginTop: "60px" }}>Smith Crypto Card</h1>

      {!loggedIn ? (
        <AuthBox onLogin={() => setLoggedIn(true)} />
      ) : (
        <div>
          <h2>Welcome to Smith Card Dashboard</h2>
          <p>Login successful.</p>

          <button
            className="primaryButton"
            style={{ maxWidth: "300px" }}
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </button>
        </div>
      )}
    </main>
  );
}
