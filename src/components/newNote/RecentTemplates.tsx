"use client";
import { getLocalStorage } from "@/lib/client/localStorage";
import { toast } from "sonner";
const RecentTemplates = ({ id }: { id: string }) => {
  const item = getLocalStorage(id);
  if (item.error) {
    toast.error(item.error);
  }
  if (!item.data || item.data.length === 0) {
    return (
      <h3 className="text-xl font-bold  tracking-wider text-gray-400 mb-6 flex items-center gap-2">
        No recent templates used
      </h3>
    );
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div className="group cursor-pointer flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all">
        <div className="h-10 w-10 rounded bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500"></div>
        <div className="truncate">
          <p className="text-sm font-bold truncate">Product Spec</p>
          <p className="text-[10px] text-gray-400">2h ago</p>
        </div>
      </div>
      <div className="group cursor-pointer flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all">
        <div className="h-10 w-10 rounded bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-500">
          <span className="material-symbols-outlined text-[20px]"></span>
        </div>
        <div className="truncate">
          <p className="text-sm font-bold truncate">Brainstorming</p>
          <p className="text-[10px] text-gray-400">Yesterday</p>
        </div>
      </div>
    </div>
  );
};

export default RecentTemplates;
