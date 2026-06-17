"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AuthBox({
  onLogin
}: {
  onLogin: () => void;
}) {
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    if (!email || !password || !username) {
      alert("Please fill all fields.");
      return;
    }

    const { error: signupError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username
        }
      }
    });

    if (signupError) {
      alert(signupError.message);
      return;
    }

    const { error: tableError } = await supabase.from("users").insert([
      {
        username: username,
        email: email
      }
    ]);

    if (tableError) {
      alert("Account created, but profile was not saved: " + tableError.message);
      return;
    }

    alert("Signup successful. Please check your email to verify your account.");
    setMode("login");
  }

  async function handleLogin() {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login successful.");
    onLogin();
  }

  return (
    <div className="authBox">
      <h2>{mode === "signup" ? "Create Account" : "Login"}</h2>

      {mode === "signup" && (
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      )}

      <input
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="primaryButton"
        onClick={mode === "signup" ? handleSignup : handleLogin}
      >
        {mode === "signup" ? "Sign Up" : "Login"}
      </button>

      <button
        className="switchButton"
        onClick={() => setMode(mode === "signup" ? "login" : "signup")}
      >
        {mode === "signup"
          ? "Already have an account? Login"
          : "Need an account? Sign up"}
      </button>
    </div>
  );
}
