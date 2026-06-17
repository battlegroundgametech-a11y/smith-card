"use client";

import { useState } from "react";

export default function Navbar({
  loggedIn,
  setPage,
  onLogout,
  openAuth
}: {
  loggedIn: boolean;
  setPage: (page: string) => void;
  onLogout: () => void;
  openAuth: () => void;
}) {
  const [open, setOpen] = useState(false);

  function go(page: string) {
    setPage(page);
    setOpen(false);
  }

  function authClick() {
    openAuth();
    setOpen(false);
  }

  return (
    <nav className="navbar">
      <button className="brand" onClick={() => go("home")}>
        SMITH<span>CARD</span>
      </button>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <div className="menuPanel">
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("dashboard")}>Dashboard</button>
          <button onClick={() => go("about")}>About Us</button>
          <button onClick={() => go("support")}>Help & Support</button>
          <button onClick={() => go("faq")}>FAQ</button>
          <button onClick={() => go("social")}>Social Media</button>

          {!loggedIn ? (
            <button className="menuPrimary" onClick={authClick}>
              Sign Up / Login
            </button>
          ) : (
            <button className="menuDanger" onClick={onLogout}>
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
