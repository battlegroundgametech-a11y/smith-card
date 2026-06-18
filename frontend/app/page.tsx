"use client";

import { useEffect, useState } from "react";
import AuthBox from "./auth";
import Navbar from "./components/Navbar";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Home() {
  const [page, setPage] = useState("home");
  const [loggedIn, setLoggedIn] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  useEffect(() => {
  async function checkSession() {
    const { data } = await import("../lib/supabase").then((m) =>
      m.supabase.auth.getSession()
    );

    if (data.session) {
      setLoggedIn(true);
    }
  }

  checkSession();
}, []);

  function logout() {
    setLoggedIn(false);
    setPage("home");
  }

  function loginSuccess() {
    setLoggedIn(true);
    setAuthOpen(false);
    setPage("dashboard");
  }

  return (
    <main className="site">
      <Navbar
        loggedIn={loggedIn}
        setPage={setPage}
        onLogout={logout}
        openAuth={() => setAuthOpen(true)}
      />

      {authOpen && (
        <div className="modalOverlay">
          <div className="modalBox">
            <button className="closeModal" onClick={() => setAuthOpen(false)}>
              ×
            </button>
            <AuthBox onLogin={loginSuccess} />
          </div>
        </div>
      )}

      {page === "home" && <HomeSection openAuth={() => setAuthOpen(true)} />}
      {page === "dashboard" && <Dashboard loggedIn={loggedIn} openAuth={() => setAuthOpen(true)} />}
      {page === "about" && <InfoPage title="About Smith Card" text="Smith Card is a Sepolia testnet crypto card platform with NFT ownership, demo virtual card access, physical card tracking, Telegram management, reloads, withdrawals, and manual admin approval." />}
      {page === "support" && <InfoPage title="Help & Support" text="Users will be able to get support through Telegram and email. The Telegram bot will show order status, card status, balance, reload, withdrawal, and shipment updates." />}
      {page === "faq" && <InfoPage title="FAQ" text="This is a testing version on ETH Sepolia. Real payment card credentials should not be stored in this demo. Demo card details will be used until a compliant card issuer setup exists." />}
      {page === "social" && <InfoPage title="Social Media" text="Telegram | Twitter/X | Farcaster | Email Support" />}
    </main>
  );
}

function HomeSection({ openAuth }: { openAuth: () => void }) {
  return (
    <>
      <section className="heroPremium">
        <div className="heroContent">
          <p className="tag">ETH SEPOLIA TESTNET</p>
          <h1>Crypto Card Access, Built Like a Premium Fintech Product.</h1>
          <p className="subtitle">
            Purchase or mint Smith Card access, receive an NFT, manage card status from Telegram,
            and unlock virtual, physical, or free mint card options.
          </p>

          <div className="heroActions">
            <button className="mainBtn" onClick={openAuth}>Get Started</button>
            <button className="ghostBtn">Explore Benefits</button>
          </div>
        </div>

        <div className="cardStage">
          <div className="metalCard">
            <div className="cardTop">
              <span>SMITH</span>
              <span>SEPOLIA</span>
            </div>
            <div className="chip"></div>
            <div className="cardNumber">4532 8821 0091 1234</div>
            <div className="cardBottom">
              <div>
                <small>CARD HOLDER</small>
                <b>RAIDEN KURL</b>
              </div>
              <div>
                <small>EXP</small>
                <b>12/29</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plans">
        <Plan title="Virtual Card" price="$5" text="Includes NFT and virtual card access. First 1000 buyers receive a $5 bonus." />
        <Plan title="Physical Card" price="$60" text="Includes NFT, virtual card access, future physical card delivery, $15 bonus, and Track Shipment." />
        <Plan title="Free Mint" price="Free" text="Includes NFT and inactive demo card. Activate after minimum reload set by admin." />
      </section>

      <section className="benefits">
        <h2>Built for a complete card experience</h2>
        <div className="benefitGrid">
          <span>NFT Ownership</span>
          <span>Telegram Card Panel</span>
          <span>Reload Balance</span>
          <span>Withdraw</span>
          <span>Admin Approval</span>
          <span>Physical Shipment Tracking</span>
        </div>
      </section>
    </>
  );
}

function Plan({ title, price, text }: any) {
  return (
    <div className="planCard">
      <h3>{title}</h3>
      <h2>{price}</h2>
      <p>{text}</p>
      <button className="smallBtn">View Option</button>
    </div>
  );
}

function Dashboard({ loggedIn, openAuth }: any) {
  const { isConnected, address } = useAccount();

  if (!loggedIn) {
    return (
      <section className="centerPage">
        <h1>Login required</h1>
        <p>Please sign up or login before opening the dashboard.</p>
        <button className="mainBtn" onClick={openAuth}>Sign Up / Login</button>
      </section>
    );
  }

  return (
    <section className="centerPage">
      <h1>Dashboard</h1>

      {!isConnected ? (
        <>
          <p>Connect your Sepolia wallet to continue.</p>
          <div className="walletBox">
            <ConnectButton />
          </div>
        </>
      ) : (
        <>
          <p>Wallet connected:</p>
          <p className="walletAddress">{address}</p>

          <div className="dashboardOptions">
            <div className="dashCard">
              <h2>Virtual Card</h2>
              <p>$5 purchase. First 1000 buyers receive a $5 bonus.</p>
              <button className="mainBtn">Purchase Virtual Card</button>
            </div>

            <div className="dashCard">
              <h2>Physical Card</h2>
              <p>$60 purchase. Includes $15 bonus and Track Shipment option.</p>
              <button className="mainBtn">Purchase Physical Card</button>
            </div>

            <div className="dashCard">
              <h2>Free Mint</h2>
              <p>Free inactive card. Activate after minimum reload.</p>
              <button className="mainBtn">Free Mint</button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

function InfoPage({ title, text }: any) {
  return (
    <section className="centerPage">
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
