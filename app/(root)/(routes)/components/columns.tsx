"use client"

import { Group } from "@/models/group"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<Group>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "users",
        header: "Users"
    },
    {
        accessorKey: "habits",
        header: "Habits"
    },
]