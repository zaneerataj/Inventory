import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

// Define the interface for a single nested link item
interface SidebarNestedLink {
  content: string;
  label: string; // The text label for the nested link
  href: string; // The URL that the nested link points to
  icon: LucideIcon; // The icon to display, which should be a React component
}

// Define the interface for a single main item with optional nested items
interface SidebarItem {
  main_label: string; // The text label for the main item
  links: SidebarNestedLink[]; // Array of nested link items
}

// Define the interface for the sidebar items
export interface SidebarItems {
  items: SidebarItem[]; // Array of main sidebar items
  extras: ReactNode; // Additional component or elements for the sidebar
}

// export interface SidebarItem {
//   href: string;
//   label: string;
//   icon: LucideIcon; // Ensure this is LucideIcon
//   // subItems?: SidebarItem[]; // This allows for nested items
// }

// export interface SidebarItems {
//   links: SidebarItem[];
//   extras: React.ReactNode;
// }
