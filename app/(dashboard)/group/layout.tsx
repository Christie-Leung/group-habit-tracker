import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation"

import NavBar from "@/components/navbar";

export default async function GroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  if(!userId) {
    redirect('/sign-in')
  }

  return (
    <>
      <NavBar />
      {children}
    </>
  )
}