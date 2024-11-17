import { Outlet } from "react-router-dom";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import { AppSidebar } from "./components/ui/AppSidebar";

const App = () => {
  return (
    <main>
      <SidebarProvider>
        <AppSidebar />
        <main className="p-5">
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </main>
  );
};

export default App;
