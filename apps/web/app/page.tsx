import { Button } from "@repo/ui/button";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NEXT_AUTH } from "../utils/auth";
import Link from "next/link";
import LaserFlowBoxExample from "@/components/homepage";

export default async function Home() {
  const session = await getServerSession(NEXT_AUTH as any);
  if (session) redirect("/playground");
  return (
    <div className="display  justify-center item-center grid-cols grid text-3xl font-bold m-20">
      <p className="flex justify-center item-center">N8N CLONE</p>
      <Link href="/signin">
        <Button>Sign In</Button>
      </Link>
      <LaserFlowBoxExample />
      <p className="text-primary">A clone of the popular workflow automation tool</p>
    </div>
  );
}
