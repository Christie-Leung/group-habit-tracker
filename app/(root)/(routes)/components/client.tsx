"use client"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Group } from "@/models/group"
import { Plus } from "lucide-react"
import { Search } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { columns } from "./columns"
import { useUser } from "@clerk/nextjs"

interface GroupClientProps {
  data: Group[]
}

export const GroupClient: React.FC<GroupClientProps> = ({
  data,
}) => {
  const router = useRouter();
  const params = useParams();
  const { user } = useUser();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading 
          title={`Your Groups`}
          description="Keep up your habits with friends!"
        />
        <div className="gap-2 flex">
          <Button variant="outline" onClick={() => router.push(`/group/${params.groupId}/join`)}>
            <Search className="mr-2 h-4 w-4" />
            Join Group
          </Button>
          <Button onClick={() => router.push(`/group/create`)}>
            <Plus className="mr-2 h-4 w-4" />
            Create New
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <div>Hello {user?.firstName} </div>
    </>
  )
}