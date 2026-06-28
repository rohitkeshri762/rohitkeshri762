import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPackage } from "@/lib/site"
import { PackageDetail } from "@/components/package-detail"

const SLUG = "kedarnath-tour-package"

export const metadata: Metadata = {
  title: "Kedarnath Yatra Tour Package",
  description:
    "Kedarnath 4D/3N pilgrimage package with premium stays, Ganga Aarti, temple assistance and helicopter options. Journey to the abode of Lord Shiva.",
}

export default function Page() {
  const pkg = getPackage(SLUG)
  if (!pkg) notFound()
  return <PackageDetail pkg={pkg} />
}
