export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "42px", marginTop: "80px" }}>
        Smith Crypto Card
      </h1>

      <p style={{ maxWidth: "650px", margin: "20px auto", color: "#cbd5e1" }}>
        A premium crypto card testing platform for ETH Sepolia with virtual
        cards, physical card access, NFT ownership, Telegram support, reloads,
        withdrawals, and admin approval.
      </p>

      <div
        style={{
          width: "330px",
          height: "210px",
          margin: "45px auto",
          borderRadius: "28px",
          padding: "24px",
          textAlign: "left",
          background: "linear-gradient(135deg, #111827, #1d4ed8, #0f766e)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.55)"
        }}
      >
        <p style={{ fontSize: "13px", color: "#dbeafe" }}>SMITH PREMIUM</p>
        <h2 style={{ marginTop: "50px" }}>Raiden Kurl</h2>
        <p style={{ letterSpacing: "3px" }}>4532 8821 0091 1234</p>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>CVV 321</span>
          <span>EXP 12/29</span>
        </div>
      </div>

      <button
        style={{
          background: "linear-gradient(135deg, #2563eb, #14b8a6)",
          color: "white",
          border: "none",
          padding: "16px 28px",
          borderRadius: "16px",
          fontWeight: "bold",
          fontSize: "16px"
        }}
      >
        Website Starter Ready
      </button>
    </main>
  );
}
