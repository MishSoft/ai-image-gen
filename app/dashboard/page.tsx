import React from "react";
import { DashboardGuard } from "../components/DashboardGuard";
import { Header } from "../components/Header";

export default function page() {
  return (
    <DashboardGuard>
      <Header />
      <main></main>
    </DashboardGuard>
  );
}
