import React, { FC, useEffect, useState } from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '../../../@/lib/utils';
import { Button } from '../../../components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../../../components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../../components/ui/popover';

interface Framework {
  value: string;
  label: string;
}

const frameworksData: Framework[] = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  // Add other frameworks as needed
];

const CustomCombobox: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [frameworks, setFrameworks] = useState<Framework[]>([]); // Initialize with empty array

  // useEffect(() => {
  //     setFrameworks(frameworks);
  //   })
  // }, []);

  useEffect(() => {
    setFrameworks(frameworksData);
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select framework...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === framework.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CustomCombobox;

// import React, { FC, useState } from 'react';
// import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
// import { cn } from '../../../@/lib/utils';
// import { Button } from '../../../components/ui/button';
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from '../../../components/ui/command';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '../../../components/ui/popover';

// interface Framework {
//   value: string;
//   label: string;
// }

// const frameworks: Framework[] = [
//   {
//     value: 'next.js',
//     label: 'Next.js',
//   },
// {
//   value: 'sveltekit',
//   label: 'SvelteKit',
// },
// {
//   value: 'nuxt.js',
//   label: 'Nuxt.js',
// },
// {
//   value: 'remix',
//   label: 'Remix',
// },
// {
//   value: 'astro',
//   label: 'Astro',
// },
// ];

// const CustomCombobox: FC = () => {
//   const [open, setOpen] = useState<boolean>(false);
//   const [value, setValue] = useState<string>('');

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-[200px] justify-between"
//         >
//           {value
//             ? frameworks.find((framework) => framework.value === value)?.label
//             : 'Select framework...'}
//           <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0">
//         <Command>
//           <CommandInput placeholder="Search framework..." className="h-9" />
//           <CommandEmpty>No framework found.</CommandEmpty>
//           <CommandGroup>
//             {frameworks.map((framework) => (
//               <CommandItem
//                 key={framework.value}
//                 value={framework.value}
//                 onSelect={(currentValue: string) => {
//                   setValue(currentValue === value ? '' : currentValue);
//                   setOpen(false);
//                 }}
//               >
//                 {framework.label}
//                 <CheckIcon
//                   className={cn(
//                     'ml-auto h-4 w-4',
//                     value === framework.value ? 'opacity-100' : 'opacity-0'
//                   )}
//                 />
//               </CommandItem>
//             ))}
//           </CommandGroup>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// };

// export default CustomCombobox;

// // import React,{FC} from "react";
// // import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
// // import { cn } from "../../../@/lib/utils"
// // import { Button } from "../../../components/ui/button"
// // import {
// //   Command,
// //   CommandEmpty,
// //   CommandGroup,
// //   CommandInput,
// //   CommandItem,
// // } from "../../../components/ui/command"
// // import {
// //   Popover,
// //   PopoverContent,
// //   PopoverTrigger,
// // } from "../../../components/ui/popover"

// // const frameworks = [
// //   {
// //     value: "next.js",
// //     label: "Next.js",
// //   },
// //   {
// //     value: "sveltekit",
// //     label: "SvelteKit",
// //   },
// //   {
// //     value: "nuxt.js",
// //     label: "Nuxt.js",
// //   },
// //   {
// //     value: "remix",
// //     label: "Remix",
// //   },
// //   {
// //     value: "astro",
// //     label: "Astro",
// //   },
// // ]

// // const CustomCombobox: FC=()=>{
// //     const [open, setOpen] = React.useState(false)
// //   const [value, setValue] = React.useState("")
// //     return(
// //         <Popover open={open} onOpenChange={setOpen}>
// //       <PopoverTrigger asChild>
// //         <Button
// //           variant="outline"
// //           role="combobox"
// //           aria-expanded={open}
// //           className="w-[200px] justify-between"
// //         >
// //           {value
// //             ? frameworks.find((framework) => framework.value === value)?.label
// //             : "Select framework..."}
// //           <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
// //         </Button>
// //       </PopoverTrigger>
// //       <PopoverContent className="w-[200px] p-0">
// //         <Command>
// //           <CommandInput placeholder="Search framework..." className="h-9" />
// //           <CommandEmpty>No framework found.</CommandEmpty>
// //           <CommandGroup>
// //             {frameworks.map((framework) => (
// //               <CommandItem
// //                 key={framework.value}
// //                 value={framework.value}
// //                 onSelect={(currentValue) => {
// //                   setValue(currentValue === value ? "" : currentValue)
// //                   setOpen(false)
// //                 }}
// //               >
// //                 {framework.label}
// //                 <CheckIcon
// //                   className={cn(
// //                     "ml-auto h-4 w-4",
// //                     value === framework.value ? "opacity-100" : "opacity-0"
// //                   )}
// //                 />
// //               </CommandItem>
// //             ))}
// //           </CommandGroup>
// //         </Command>
// //       </PopoverContent>
// //     </Popover>

// //     )
// // }
// // export default CustomCombobox;
