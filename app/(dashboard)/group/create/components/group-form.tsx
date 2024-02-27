"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/datepicker";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const habitSchema = z.object({
    habitName: z.string().min(1).max(50),
    habitDescription: z.string(),
    startDate: z.date(),
    icon: z.string(),
})

const formSchema = z.object({
    groupName: z.string().min(1).max(50),
    description: z.string(),
    habits: z.array(habitSchema),
})

export function CreateGroupForm() {

    const [habitCount, setHabitCount] = useState(0);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            groupName: "",
            description: "",
        },
    })
    const control = form.control;
    const {fields, append, remove} = useFieldArray({
        name: "habits",
        control,
    });

    const addHabit = () => {
        const index = habitCount;
        setHabitCount(habitCount+1);
        return (
            <div>
                <FormField
                    control={form.control}
                    name={`habits.${index}.habitName`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Habit Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Habit Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`habits.${index}.habitDescription`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Habit Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Habit Description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`habits.${index}.startDate`}
                    render={() => (
                        <FormItem>
                            <FormLabel>Habit Start Date</FormLabel>
                            <FormControl>
                                <DatePicker/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
        )
    }

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
                <Separator />
                {fields.map((field, index) => {
                    return (
                    <div key={index}>
                        <h2 className="text-xl font-bold tracking-tight">Habit #{index+1}</h2>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-4 mb-4" key={field.id}>
                            <FormField
                                control={form.control}
                                name={`habits.${index}.habitName`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Habit Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Habit Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={`habits.${index}.habitDescription`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Habit Description</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Habit Description" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={`habits.${index}.startDate`}
                                render={() => (
                                    <FormItem className="flex flex-col items-left">
                                        <FormLabel>Habit Start Date</FormLabel>
                                        <FormControl>
                                            <DatePicker />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name={`habits.${index}.startDate`}
                                render={() => (
                                    <FormItem className="flex flex-col items-left">
                                        <FormLabel>Habit Icon</FormLabel>
                                        <FormControl>
                                            <DatePicker />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                            <Button type="button" variant="destructive" onClick={() => remove(index)}>
                                <MinusIcon className="mr-2 h-4 w-4"/>
                                Remove
                            </Button>
                        </div>
                    </div>
                    )
                })}
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                    <Button type="button" variant="outline" onClick={() => append({
                        habitName: "",
                        habitDescription: "",
                        startDate: new Date(),
                        icon: "",
                    })}>
                        <PlusIcon />
                    </Button>
                </div>
                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                    <Button type="submit">Create</Button>
                </div>
            </form>
        </Form>
    </div>
    )
}