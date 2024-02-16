"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Group } from "@/models/group"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<Group>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "users",
        header: "Users",
        cell: ({ row }) => {
            const firstName: string = row.getValue("firstName");
            const lastName: string = row.getValue("lastName");
            return (
                <Avatar>
                    <AvatarImage src={row.getValue("profilePic")} />
                    <AvatarFallback>{firstName[0]}{lastName[0]}</AvatarFallback>
                </Avatar>
            )
        }
    },
    {
        accessorKey: "habits",
        header: "Habits"
    },
]