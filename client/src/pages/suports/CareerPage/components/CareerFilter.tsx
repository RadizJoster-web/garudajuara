interface CareerFilterProps {
  departments: string[];
  activeDept: string;
  onSelectDept: (dept: string) => void;
}

export default function CareerFilter({
  departments,
  activeDept,
  onSelectDept,
}: CareerFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {departments.map((dept) => {
        const isActive = activeDept === dept;
        return (
          <button
            key={dept}
            onClick={() => onSelectDept(dept)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-primary/40"
            }`}
          >
            {dept}
          </button>
        );
      })}
    </div>
  );
}
