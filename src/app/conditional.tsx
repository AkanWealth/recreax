"use client";

import { usePathname } from "next/navigation";
import Header from "@/component/homecomps/Header";
import Footer from "@/component/homecomps/Footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPartnershipPage = pathname === "/partnership";

  if (isPartnershipPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
