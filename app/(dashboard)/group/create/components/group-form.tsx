"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    groupName: z.string().min(1).max(50),
    description: z.string(),
})

export function CreateGroupForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            groupName: "",
            description: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // TODO
    }

    return (
    <div className="space-y-4 py-2 pb-4">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                <FormField
                    control={form.control}
                    name="groupName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Group Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Group Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Group Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Group Description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                </div>
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                    <Button type="submit">Create</Button>
                </div>
            </form>
        </Form>
    </div>
    )
}