"use client"

import {
  RiBankCard2Line,
  RiCustomerService2Fill,
  RiExchange2Line,
  RiHome2Line,
} from "@remixicon/react"

import { TabNavigation, TabNavigationLink } from "@/components/TabNavigation"
import Link from "next/link"

import { usePathname } from "next/navigation"

function Navigation() {
  const pathname = usePathname()
  return (
    <TabNavigation>
      <TabNavigationLink
        className="inline-flex gap-2"
        asChild
        active={pathname === "/overview" || pathname === "/"}
      >
        <Link href="/overview">
          <RiHome2Line className="size-4 shrink-0" aria-hidden="true" />
          <span>Overview</span>
        </Link>
      </TabNavigationLink>
      <TabNavigationLink
        className="inline-flex gap-2"
        asChild
        active={pathname === "/balances"}
      >
        <Link href="/balances">
          <RiBankCard2Line className="size-4 shrink-0" aria-hidden="true" />
          <span>Balances</span>
        </Link>
      </TabNavigationLink>
      <TabNavigationLink
        className="inline-flex gap-2"
        asChild
        active={pathname === "/transactions"}
      >
        <Link href="/transactions">
          <RiExchange2Line className="size-4 shrink-0" aria-hidden="true" />
          <span>Transactions</span>
        </Link>
      </TabNavigationLink>
      <TabNavigationLink
        className="inline-flex gap-2"
        asChild
        active={pathname === "/customers"}
      >
        <Link href="/customers">
          <RiCustomerService2Fill
            className="size-4 shrink-0"
            aria-hidden="true"
          />
          <span>Customers</span>
        </Link>
      </TabNavigationLink>
    </TabNavigation>
  )
}

export { Navigation }
