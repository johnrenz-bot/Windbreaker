"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <h1>Dashboard Loaded</h1>;
}
