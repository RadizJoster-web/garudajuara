export default function SidebarAdWidget() {
  return (
    <div className="w-full bg-gray-100 dark:bg-neutral-800/60 border border-dashed border-gray-300 dark:border-neutral-700 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[250px] text-center select-none">
      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
        — SPONSORED ADVERTISEMENT —
      </span>
      <p className="text-xs font-display font-semibold text-gray-500 dark:text-gray-400">
        Slot Iklan Sidebar (Google AdSense 300x250 Medium Rectangle)
      </p>
    </div>
  );
}
