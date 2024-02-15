
import { Group, group } from "@/models/group";
import { GroupClient } from "./components/client";

async function getData(): Promise<Group[]> {
    return group
}

const HomeDashboard = async () => {

    const data = await getData();

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <GroupClient data={data} />
            </div>
        </div>
    )
}

export default HomeDashboard