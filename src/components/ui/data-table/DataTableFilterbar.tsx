"use client"

import { Button } from "@/components/Button"
import { accounts } from "@/data/schemaAgents"
// import { Searchbar } from "@/components/Searchbar"
// import { conditions, regions, statuses } from "@/data/data"
import { RiDownloadLine } from "@remixicon/react"
import { Table } from "@tanstack/react-table"
import { DataTableFilter } from "./DataTableFilter"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function Filterbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  // const [searchTerm, setSearchTerm] = useState<string>("")

  // const debouncedSetFilterValue = useDebouncedCallback((value) => {
  //   table.getColumn("owner")?.setFilterValue(value)
  // }, 300)

  // const handleSearchChange = (event) => {
  //   const value = event.target.value
  //   setSearchTerm(value)
  //   debouncedSetFilterValue(value)
  // }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-x-6">
      <div className="flex w-full flex-col gap-2 sm:w-fit sm:flex-row sm:items-center">
        {/* {table.getColumn("status")?.getIsVisible() && (
          <DataTableFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
            type="select"
          />
        )} */}
        {table.getColumn("account")?.getIsVisible() && (
          <DataTableFilter
            column={table.getColumn("account")}
            title="Account"
            options={accounts}
            type="checkbox"
          />
        )}
        {/* {table.getColumn("costs")?.getIsVisible() && (
          <DataTableFilter
            column={table.getColumn("costs")}
            title="Costs"
            type="number"
            options={conditions}
            formatter={formatters.currency}
          />
        )} */}
        {/* {table.getColumn("owner")?.getIsVisible() && (
          <Searchbar
            type="search"
            placeholder="Search by owner..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full sm:max-w-[250px] sm:[&>input]:h-[30px]"
          />
        )} */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="border border-gray-200 px-2 font-semibold text-blue-500 sm:border-none sm:py-1 dark:border-gray-800 dark:text-blue-400"
          >
            Clear filters
          </Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          className="hidden gap-x-2 px-2 py-1.5 text-sm sm:text-xs lg:flex"
        >
          <RiDownloadLine className="size-4 shrink-0" aria-hidden="true" />
          Export
        </Button>
      </div>
    </div>
  )
}
