import { NavLink } from "react-router-dom";

interface CategoryItemProps {
  name: string;
  slug: string;
}

export default function CategoryItem({ name, slug }: CategoryItemProps) {
  const targetPath = slug ? `/kategori/${slug}` : "/";

  return (
    <NavLink
      to={targetPath}
      end={slug === ""}
      className={({ isActive }) =>
        `relative py-2.5 px-3 text-xs md:text-md font-inter tracking-wide whitespace-nowrap transition-colors duration-300 select-none group cursor-pointer ${
          isActive
            ? "text-primary dark:text-primary"
            : "text-gray-500 dark:text-gray-400 hover:text-dark dark:hover:text-light"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {/* Teks Kategori */}
          <span>{name}</span>

          {/* 
            Efek "Ulat" / Animated Border Line 
            - Hover State: Bergerak/memanjang dari KIRI ke KANAN (origin-left)
            - Active State: Menetap pas di TENAGH (scale-x-100 & origin-center)
          */}
          <span
            className={`absolute bottom-0 h-[2.5px] bg-primary rounded-full transition-transform duration-300 ease-out ${
              isActive
                ? "left-0 right-0 scale-x-100 origin-center"
                : "left-0 right-0 scale-x-0 origin-left group-hover:scale-x-100"
            }`}
          />
        </>
      )}
    </NavLink>
  );
}
