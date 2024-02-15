export type Group = {
    id: number,
    name: string,
    users: User[],
    habits: string[],
    inviteCode: string
}

export const group: Group[] = [
    {
        id: 1234,
        name: "Test",
        users: [],
        habits: [],
        inviteCode: "!23"
    },
    {
        id: 1235,
        name: "Test",
        users: [],
        habits: [],
        inviteCode: "!23"
    }
]