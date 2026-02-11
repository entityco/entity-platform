"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  PanelLeftIcon,
  PlusIcon,
  HomeIcon,
  SettingsIcon,
  DatabaseIcon,
  FolderIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  MessageSquareIcon,
  FileIcon,
  UserIcon,
  LogOutIcon,
} from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

interface Chat {
  id: string
  title: string
}

interface Resource {
  id: string
  name: string
  type: string
}

interface Project {
  id: string
  name: string
  chats: Chat[]
  resources: Resource[]
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Marketing Campaign Q1",
    chats: [
      { id: "c1", title: "Ad Copy Discussion" },
      { id: "c2", title: "Audience Analysis" },
    ],
    resources: [
      { id: "r1", name: "Brand Guidelines.pdf", type: "pdf" },
      { id: "r2", name: "Campaign Brief.docx", type: "docx" },
    ],
  },
  {
    id: "2",
    name: "Product Launch",
    chats: [
      { id: "c3", title: "Feature Prioritization" },
      { id: "c4", title: "Launch Timeline" },
      { id: "c5", title: "Competitor Analysis" },
    ],
    resources: [
      { id: "r3", name: "Product Specs.pdf", type: "pdf" },
    ],
  },
]

const workspaces = [
  { id: "w1", name: "Acme Corp" },
  { id: "w2", name: "Personal" },
  { id: "w3", name: "Client Projects" },
]

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar()
  const [currentWorkspace, setCurrentWorkspace] = React.useState(workspaces[0])
  const [openProjects, setOpenProjects] = React.useState<Set<string>>(new Set())

  const toggleProject = (projectId: string) => {
    const newOpen = new Set(openProjects)
    if (newOpen.has(projectId)) {
      newOpen.delete(projectId)
    } else {
      newOpen.add(projectId)
    }
    setOpenProjects(newOpen)
  }

  return (
    <>
      <div
        className={`relative flex h-full flex-col ${
          state === "collapsed" ? "w-[60px]" : "w-[260px]"
        } transition-all duration-300`}
      >
        <div className="flex h-14 items-center gap-2 border-b px-3">
          <div
            className={`relative flex items-center gap-2 ${
              state === "collapsed" ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Image
              src="/icon-entity.png"
              alt="Entity"
              width={24}
              height={24}
              className="rounded-sm"
            />
            <span className="text-sm font-medium">Entity</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className={state === "collapsed" ? "absolute left-0" : ""}
          >
            <PanelLeftIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between border-b p-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`w-full justify-start gap-2 ${
                  state === "collapsed" ? "px-0" : ""
                }`}
              >
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/icon-entity.png" />
                  <AvatarFallback className="text-xs">
                    {currentWorkspace.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {state === "expanded" && (
                  <>
                    <span className="flex-1 truncate text-left text-sm">
                      {currentWorkspace.name}
                    </span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start">
              <DropdownMenuLabel>Switch Workspace</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {workspaces.map((ws) => (
                <DropdownMenuItem
                  key={ws.id}
                  onClick={() => setCurrentWorkspace(ws)}
                >
                  {ws.name}
                  {ws.id === currentWorkspace.id && (
                    <DropdownMenuShortcut>✓</DropdownMenuShortcut>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="p-3">
            <Button
              variant="outline"
              size="sm"
              className={`w-full justify-start gap-2 ${
                state === "collapsed" ? "px-2" : ""
              }`}
            >
              <PlusIcon className="h-4 w-4" />
              {state === "expanded" && "New Project"}
            </Button>
          </div>

          <nav className="space-y-1 px-3">
            <Link
              href="/home"
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent ${
                state === "collapsed" ? "justify-center px-0" : ""
              }`}
            >
              <HomeIcon className="h-4 w-4" />
              {state === "expanded" && "Home"}
            </Link>
            <Link
              href="/skills"
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent ${
                state === "collapsed" ? "justify-center px-0" : ""
              }`}
            >
              <SettingsIcon className="h-4 w-4" />
              {state === "expanded" && "Skills"}
            </Link>
            <Link
              href="/data-connectors"
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent ${
                state === "collapsed" ? "justify-center px-0" : ""
              }`}
            >
              <DatabaseIcon className="h-4 w-4" />
              {state === "expanded" && "Data Connectors"}
            </Link>
          </nav>

          {state === "expanded" && (
            <div className="mt-4 px-3">
              <h3 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
                Projects
              </h3>
            </div>
          )}
          <div className="space-y-1 px-3">
            {mockProjects.map((project) => (
              <Collapsible
                key={project.id}
                open={openProjects.has(project.id)}
                onOpenChange={() => toggleProject(project.id)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-full justify-start gap-2 ${
                      state === "collapsed" ? "px-2" : ""
                    }`}
                  >
                    <FolderIcon className="h-4 w-4" />
                    {state === "expanded" && (
                      <>
                        <span className="flex-1 truncate text-sm">
                          {project.name}
                        </span>
                        {openProjects.has(project.id) ? (
                          <ChevronDownIcon className="h-4 w-4" />
                        ) : (
                          <ChevronRightIcon className="h-4 w-4" />
                        )}
                      </>
                    )}
                  </Button>
                </CollapsibleTrigger>
                {state === "expanded" && (
                  <CollapsibleContent className="pl-6">
                    {project.chats.map((chat) => (
                      <Link
                        key={chat.id}
                        href={`/chat/${chat.id}`}
                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent"
                      >
                        <MessageSquareIcon className="h-3 w-3" />
                        {chat.title}
                      </Link>
                    ))}
                    {project.resources.map((resource) => (
                      <Link
                        key={resource.id}
                        href={`/resource/${resource.id}`}
                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent"
                      >
                        <FileIcon className="h-3 w-3" />
                        {resource.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                )}
              </Collapsible>
            ))}
          </div>
        </div>

        <div className="border-t p-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`w-full justify-start gap-2 ${
                  state === "collapsed" ? "px-2" : ""
                }`}
              >
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/icon-entity.png" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                {state === "expanded" && (
                  <>
                    <span className="flex-1 truncate text-sm">User Name</span>
                  </>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserIcon className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <LogOutIcon className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  )
}
