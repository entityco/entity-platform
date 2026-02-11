import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "./_components/App-Sidebar"

export default function AppPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <span className="text-sm font-medium">App Content</span>
        </header>
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold">Welcome to Entity</h1>
          <p className="mt-2 text-muted-foreground">
            Your app content goes here. The sidebar provides navigation to
            projects, chats, and resources.
          </p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
