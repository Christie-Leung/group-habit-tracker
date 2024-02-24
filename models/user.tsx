interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    profilePic: string,
    groups: string[],
    habits: string[],
    getUser: () => User,
    getProfilePic: () => string,
    addGroup: (groupId: string) => void,
}