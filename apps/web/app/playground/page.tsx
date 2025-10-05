import Playground from "@repo/ui/react-flow/playground";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../../utils/auth";
import { redirect } from "next/navigation";

export default async function PlaygroundPage() {
    const session = await getServerSession(NEXT_AUTH as any);
    if (!session) redirect("/");
    return <Playground />;
}
