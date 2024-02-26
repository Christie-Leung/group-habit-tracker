import { Heading } from "@/components/ui/heading";
import { CreateGroupForm } from "./components/group-form";

const CreateGroupPage = async ({
  params
}: {
  params: { groupId: string }
}) => {

  return (
    <div className="flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
        <Heading 
          title={`Create a New Group`}
          description="Be the leader of a group and start tracking habits with your friends!"
        />
        </div>
        <CreateGroupForm />
      </div>
    </div>
  )
}

export default CreateGroupPage;