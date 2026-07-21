import { Link } from "react-router-dom";
import type { FooterLink } from "../../../../assets/dataFooters";

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-xs font-display font-black tracking-widest text-light uppercase">
        {title}
      </h4>
      <ul className="flex flex-col gap-2 font-body text-xs text-gray-400">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              to={link.href}
              className="hover:text-light hover:underline transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
