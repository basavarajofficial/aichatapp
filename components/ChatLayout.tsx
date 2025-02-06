"use client"

import * as React from "react"
import { MessageCircle, FileText, Settings, LogOut, Send, Mic } from "lucide-react"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useState } from "react"

const navigationItems = [
  {
    title: "Dashboard",
    icon: MessageCircle,
    isActive: true,
  },
  {
    title: "Documents",
    icon: FileText,
  },
  {
    title: "Settings",
    icon: Settings,
  },
]

export default function ChatLayout() {
  const [rightPanelSize, setRightPanelSize] = useState(20);

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex w-full h-screen overflow-hidden bg-background">
        <Sidebar collapsible="icon" className="border-r">
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary p-1 text-primary-foreground">
                SB
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    tooltip={item.title} // Shows tooltip when collapsed
                  >
                    <a href="#" className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="w-full" tooltip="Logout">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>



        <ResizablePanelGroup direction="horizontal" className="flex-2">
          <ResizablePanel defaultSize={80} minSize={30}>
            <div className="flex h-screen flex-col">
              <header className="flex items-center gap-4 border-b px-6 py-4">
                <SidebarTrigger />
                <h1 className="text-xl font-semibold">Powering Enterprise Innovation with Gen-AI</h1>
              </header>

              <main className="flex-1 overflow-auto p-6">
                <div className="mx-auto max-w-3xl">
                  <div className="mb-20 flex flex-col items-center justify-center pt-20">
                    <h2 className="mb-10 text-3xl font-bold">What can I help with?</h2>
                  </div>
                </div>
              </main>

              <footer className="border-t p-4">
                <div className="mx-auto max-w-3xl mb-5">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <Mic className="h-5 w-5" />
                    </Button>
                    <Input placeholder="Write here....." className="rounded-xl" />
                    <Button size="icon" className="shrink-0">
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </footer>
            </div>
          </ResizablePanel>



          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={rightPanelSize} minSize={15} maxSize={30} onResize={setRightPanelSize}>
            <div className="flex h-full flex-col border-l">
              <div className="border-b p-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">History</h2>
                  <span className="text-muted-foreground">0/50</span>
                </div>
              </div>
              <div className="flex-1 overflow-auto p-4">{/* History items would go here */}</div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </SidebarProvider>
  )
}
