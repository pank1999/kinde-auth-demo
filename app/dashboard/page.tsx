import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/signin");
  }
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen w-screen">
      <div className="text-3xl">
        Hi {user.given_name} {user.family_name}.
      </div>
      <div className="text-3xl">Welcome to the dashboard!</div>
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
        <LogoutLink>Sign out</LogoutLink>
      </div>
    </div>
  );
}
