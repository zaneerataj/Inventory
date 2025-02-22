import React, { FC } from 'react';
import {
  Tree,
  Folder,
  File,
  CollapseButton,
} from '../../../components/extension/tree-view';

interface FileElement {
  id: string;
  isSelectable: boolean;
  name: string;
  children?: FileElement[];
}

interface CustomTreeViewProps {
  elements: FileElement[];
  initialSelectedId?: string;
}

interface SidebarItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  subItems?: SidebarItem[]; // Nested items
}

interface SidebarItems {
  links: SidebarItem[];
  extras: React.ReactNode;
}

const CustomTreeView: FC<CustomTreeViewProps> = ({
  elements,
  initialSelectedId,
}) => {
  const renderTree = (element: FileElement) => {
    if (element.children && element.children.length > 0) {
      return (
        <Folder key={element.id} value={element.id} element={element.name}>
          {element.children.map(renderTree)}
        </Folder>
      );
    }
    return (
      <File key={element.id} value={element.id}>
        <p>{element.name}</p>
      </File>
    );
  };

  return (
    <Tree
      className="rounded-md h-60 bg-background overflow-hidden p-2"
      initialSelectedId={initialSelectedId}
      elements={elements}
    >
      {elements.map(renderTree)}
      <CollapseButton elements={elements} />
    </Tree>
  );
};

export default CustomTreeView;

// import {
//     Tree,
//     Folder,
//     File,
//     CollapseButton,
//   } from "../../../components/extension/tree-view";
// import React, {FC} from "react";

//   const CustomTreeView: FC = () => {
//     const elements = [
//       {
//         id: "1",
//         isSelectable: false,
//         name: "src",
//         children: [
//           {
//             id: "2",
//             isSelectable: true,
//             name: "app.tsx",
//           },
//           {
//             id: "3",
//             isSelectable: true,
//             name: "components",
//             children: [
//               {
//                 id: "20",
//                 isSelectable: true,
//                 name: "pages",
//                 children: [
//                   {
//                     id: "21",
//                     isSelectable: true,
//                     name: "interface.ts",
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             id: "6",
//             isSelectable: true,
//             name: "ui",
//             children: [
//               {
//                 id: "7",
//                 isSelectable: true,
//                 name: "carousel.tsx",
//               },
//             ],
//           },
//         ],
//       },
//     ];
//     return (
//       <Tree
//         className="rounded-md h-60 bg-background overflow-hidden p-2"
//         initialSelectedId="21"
//         elements={elements}
//       >
//         <Folder element="src" value="1">
//           <File value="2">
//             <p> app.tsx </p>
//           </File>
//           <Folder value="3" element="components">
//             <Folder value="20" element="pages">
//               <File value="21">
//                 <p>interface.ts</p>
//               </File>
//             </Folder>
//           </Folder>
//           <Folder value="6" element="ui">
//             <File value="7">
//               <p>carousel.tsx</p>
//             </File>
//           </Folder>
//         </Folder>
//         <CollapseButton elements={elements} />
//       </Tree>
//     );
//   };

//   export default CustomTreeView;
