// import Image from "next/image";
// import LoginForm from "./components/LoginForm";

import { redirect } from "next/navigation";

export default function Home() {
  return redirect("/login");
}
