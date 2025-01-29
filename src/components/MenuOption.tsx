import React from 'react';
import { IconType } from 'react-icons';

interface MenuOptionProps {
  href: string;
  icon: IconType;
  label: string;
}

const MenuOption: React.FC<MenuOptionProps> = ({ href, icon: Icon, label }) => {
  return (
    <a href={href} className="flex items-center gap-2 text-lg text-neutral-200 hover:text-primary menu-option">
      <Icon className="icon menu-icon" />
      <span className="md:flex hidden text-xl">{label}</span>
    </a>
  );
};

export default MenuOption;