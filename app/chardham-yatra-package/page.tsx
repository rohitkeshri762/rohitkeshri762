import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPackage } from "@/lib/site"
import { PackageDetail } from "@/components/package-detail"

const SLUG = "chardham-yatra-package"

export const metadata: Metadata = {
  title: "Char Dham Yatra Package",
  description:
    "The complete Char Dham Yatra 11D/10N — Yamunotri, Gangotri, Kedarnath and Badrinath with premium stays, helicopter assistance and full coordination.",
}

export default function Page() {
  const pkg = getPackage(SLUG)
  if (!pkg) notFound()
  return <PackageDetail pkg={pkg} />
}
