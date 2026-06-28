import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPackage } from "@/lib/site"
import { PackageDetail } from "@/components/package-detail"

const SLUG = "do-dham-yatra"

export const metadata: Metadata = {
  title: "Do Dham Yatra Package",
  description:
    "Do Dham 6D/5N pilgrimage combining Kedarnath and Badrinath with premium stays, helicopter assistance and a dedicated trip coordinator.",
}

export default function Page() {
  const pkg = getPackage(SLUG)
  if (!pkg) notFound()
  return <PackageDetail pkg={pkg} />
}
