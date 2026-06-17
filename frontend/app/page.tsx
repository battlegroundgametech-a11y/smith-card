"use client";

import { useState } from "react";
import AuthBox from "./auth";
import Navbar from "./components/Navbar";

export default function Home() {
  const [page, setPage] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);

  function logout() {
    setLoggedIn(false);
    setPage("home");
  }

  return (
    <main className="site">
      <Navbar loggedIn={loggedIn} setPage={setPage} onLogout={logout} />

      {page === "home" && <HomeSection setPage={setPage} />}
      {page === "auth" && <AuthBox onLogin={() => { setLoggedIn(true); setPage("dashboard"); }} />}
      {page === "dashboard" && <Dashboard loggedIn={loggedIn} setPage={setPage} />}
      {page === "about" && <SimpleSection title="About Us" text="Smith Card is a Sepolia testnet crypto card project with virtual cards, physical cards, NFTs, reloads, withdrawals, Telegram support, and manual admin approval." />}
      {page === "support" && <SimpleSection title="Help & Support" text="Support will be available through Telegram and email. Users can check order status, card status, shipment status, balance, reloads, and withdrawals." />}
      {page === "faq" && <SimpleSection title="FAQ" text="This is currently a testnet version on ETH Sepolia. No real card details or real money card credentials should be stored in this demo." />}
      {page === "social" && <SimpleSection title="Social Media" text="Telegram | Twitter/X | Farcaster | Email Support" />}
    </main>
  );
}

function HomeSection({ setPage }: any) {
  return (
    <section className="hero">
      <p className="eyebrow">ETH SEPOLIA TEST VERSION</p>
      <h1>Professional Crypto Card Experience</h1>
      <p className="heroText">
        Smith Card is a premium crypto card testing platform with virtual cards,
        physical card access, NFT ownership, reloads, withdrawals, Telegram support,
        shipment tracking, and admin approval.
      </p>

      <div className="premiumCard">
        <p>SMITH PREMIUM</p>
        <h2>Raiden Kurl</h2>
        <h3>4532 8821 0091 1234</h3>
        <div>
          <span>CVV 321</span>
          <span>EXP 12/29</span>
        </div>
      </div>

      <button className="primaryButton heroButton" onClick={() => setPage("auth")}>
        Start Now
      </button>

      <section className="cardGrid">
        <Plan title="Virtual Card" price="$5" text="NFT + virtual card. First 1000 buyers receive a $5 card bonus." />
        <Plan title="Physical Card" price="$60" text="NFT + virtual card + future physical card + $15 bonus + Track Shipment option." />
        <Plan title="Free Mint" price="Free" text="NFT + inactive card. Activate after minimum reload set by admin." />
      </section>
    </section>
  );
}

function Plan({ title, price, text }: any) {
  return (
    <div className="planCard">
      <h2>{title}</h2>
      <h3>{price}</h3>
      <p>{text}</p>
    </div>
  );
}

function Dashboard({ loggedIn, setPage }: any) {
  if (!loggedIn) {
    return (
      <section className="hero">
        <h1>Please login first</h1>
        <button className="primaryButton heroButton" onClick={() => setPage("auth")}>
          Login
        </button>
      </section>
    );
  }

  return (
    <section className="hero">
      <h1>Dashboard</h1>
      <p className="heroText">
        Next step: wallet connection, then Virtual Card, Physical Card, and Free Mint purchase options.
      </p>
    </section>
  );
}

function SimpleSection({ title, text }: any) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p className="heroText">{text}</p>
    </section>
  );
}
