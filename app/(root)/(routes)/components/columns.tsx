"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Group } from "@/models/group"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"


export const columns: ColumnDef<Group>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => {
            
            return (
                <Link 
                    key={row.original.id}
                    href={`/group/${row.original.id}`}
                    className={"text-sm font-medium transition-colors hover:text-primary hover:underline"}
                >
                    {row.original.name}
                </Link>
            )
        }
    },
    {
        accessorKey: "users",
        header: "Users",
        cell: ({ row }) => {
            return (
                <>
                {row.original.users.map(user => {
                    let firstName: string = user.firstName;
                    let lastName: string = user.lastName;

                    if (!firstName) firstName = "";
                    if (!lastName) lastName = ""

                    return (
                        <Avatar>
                            <AvatarImage src={user.profilePic}/>
                            <AvatarFallback>{firstName[0]}{lastName[0]}</AvatarFallback>
                        </Avatar>
                    )
                })}
                </>
            )
        }
    },
    {
        accessorKey: "habits",
        header: "Habits"
    },
]