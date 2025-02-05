import { AlarmCheckIcon, User2Icon } from "lucide-react";
import { BellIcon } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-white p-4 flex justify-between items-center">

      <h2 className="text-lg">Powering Enterprise Innovation with Gen-AI</h2>
      <div className="flex gap-4">
        <button aria-label="Notifications" className="p-2 hover:bg-gray-100 rounded-full"><BellIcon /> </button>
        <button aria-label="Timer" className="p-2 hover:bg-gray-100 rounded-full"><AlarmCheckIcon /> </button>
        <button aria-label="Profile" className="p-2 hover:bg-gray-100 rounded-full"><User2Icon /></button>
      </div>
    </header>
  );
}
