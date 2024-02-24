"use client"

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod" 

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Group } from "@/models/group"
import { Plus } from "lucide-react"
import { Search } from "lucide-react"
import { redirect, useParams, useRouter } from "next/navigation"
import { columns } from "./columns"
import { useUser } from "@clerk/nextjs"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";


interface GroupClientProps {
  data: Group[]
}

const formSchema = z.object({
  inviteCode: z.string().min(1)
})

export const GroupClient: React.FC<GroupClientProps> = ({
  data,
}) => {
  const router = useRouter();
  const params = useParams();
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inviteCode: "",
    },
  });


  const onJoin = async (values: z.infer<typeof formSchema>) => {
    // 
    try{
      setLoading(true);
      setOpen(false);
      toast.success("Successfully joined group.");
      redirect(`/`);
    } catch (error) {
      toast.error("Error message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading 
          title={`Your Groups`}
          description="Keep up your habits with friends!"
        />
        <div className="gap-2 flex">

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Search className="mr-2 h-4 w-4" />
                Join Group
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Join a Group</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onJoin)} id="joinGroup">
                  <FormField
                    control={form.control}
                    name="inviteCode"
                    render={ ({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            disabled={loading}
                            {...field}
                            placeholder="Enter your invite code"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
              <DialogFooter>
                <Button type="submit" form="joinGroup" disabled={loading}>
                  Join
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Button onClick={() => router.push(`/group/${params.groupId}/create`)}>
            <Plus className="mr-2 h-4 w-4" />
            Create New
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
    </>
  )
}