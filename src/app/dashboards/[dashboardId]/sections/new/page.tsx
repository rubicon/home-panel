import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import { AccessDenied } from "@/components/AccessDenied";
import { sectionCreate } from "@/utils/serverActions/section";

export const metadata: Metadata = {
  title: "New Section | Home Panel",
  description: "New Section - Home Panel",
};

export const revalidate = 0;

export default async function Page({
  params,
}: {
  params: { dashboardId: string };
}): Promise<JSX.Element> {
  console.log("New Section:", params);

  const session = await getServerSession();
  if (!session) return <AccessDenied />;

  const newSection = await sectionCreate(params.dashboardId);

  return redirect(
    `/dashboards/${params.dashboardId}/sections/${newSection.id}/edit`
  );
}
