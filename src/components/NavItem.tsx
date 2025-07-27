import React from "react";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, title }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <li className="relative">
      <a
        href={href}
        aria-label={title}
        onClick={handleClick}
        className="text-[#D1D5DB] hover:text-[#4ADE80] transition-all duration-1000 ease-out hover:duration-1000 group flex items-center overflow-hidden rounded-lg px-2 py-2 hover:bg-[#1F2937]/50 hover:shadow-lg hover:shadow-[#4ADE80]/20 hover:pr-4 hover:w-auto w-10"
      >
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80]/0 to-[#4ADE80]/0 group-hover:from-[#4ADE80]/5 group-hover:to-[#4ADE80]/10 rounded-lg transition-all duration-300"></div>

        {/* Icon container */}
        <div className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10">
          {icon}
        </div>

        {/* Text that appears on hover */}
        <span className="ml-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-white group-hover:text-[#4ADE80] font-semibold">
          {title}
        </span>

        {/* Focus indicator for accessibility */}
        <div className="absolute inset-0 border-2 border-transparent group-focus-visible:border-[#4ADE80] rounded-lg transition-all duration-200"></div>
      </a>
    </li>
  );
};

export default NavItem;
