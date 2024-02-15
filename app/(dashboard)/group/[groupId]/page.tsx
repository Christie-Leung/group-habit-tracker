import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation"

import NavBar from "@/components/navbar";

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { groupId: string }
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