"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {SYSTEM_ENTRYPOINTS} from "next/constants";
import {IconCloudComputing, IconDeviceComputerCamera, IconDeviceDesktop} from "@tabler/icons-react";

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className={"gap-2"} onClick={() => setTheme("light")}>
          <Sun className={"h-4 w-4 "}/>
          Clair
        </DropdownMenuItem>
        <DropdownMenuItem className={"gap-2"} onClick={() => setTheme("dark")}>
          <Moon className={"h-4 w-4 "}/>
          Sombre
        </DropdownMenuItem>
        <DropdownMenuItem className={"gap-2"} onClick={() => setTheme("system")}>
          <IconDeviceDesktop  className={"h-4 w-4 "} />
          Système
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
