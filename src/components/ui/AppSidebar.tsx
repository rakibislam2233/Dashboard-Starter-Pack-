import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "./sidebar";

import { Home, Settings, User, HelpCircle } from "lucide-react"; // Icon library

export function AppSidebar() {
  return (
    <Sidebar className="bg-gray-800  h-screen">
      {/* Sidebar Header */}
      <SidebarHeader>
        <div className="p-4 text-center text-lg font-bold border-b border-gray-700">
          My App
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="flex-1">
        {/* Main Navigation */}
        <SidebarGroup className="p-4">
          <h3 className="mb-2 text-sm font-semibold text-gray-400">Main</h3>
          <ul className="space-y-2">
            <li className="flex items-center p-2 rounded-md">
              <Home className="mr-3 h-5 w-5" /> Dashboard
            </li>
            <li className="flex items-center p-2 rounded-md">
              <User className="mr-3 h-5 w-5" /> Profile
            </li>
          </ul>
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup className="p-4">
          <h3 className="mb-2 text-sm font-semibold text-gray-400">Settings</h3>
          <ul className="space-y-2">
            <li className="flex items-center p-2 rounded-md">
              <Settings className="mr-3 h-5 w-5" /> Account Settings
            </li>
            <li className="flex items-center p-2 rounded-md">
              <HelpCircle className="mr-3 h-5 w-5" /> Help Center
            </li>
          </ul>
        </SidebarGroup>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="p-4 border-t border-gray-700">
        <div className="text-sm text-gray-400">
          © 2024 My App. All rights reserved.
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
