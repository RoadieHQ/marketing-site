import React, { Fragment } from 'react';
// import { Popover, Transition } from '@headlessui/react';

// import DrawerMenuHeader from './DrawerMenuHeader';
// import MobileDropdownNavItem from './MobileDropdownNavItem';
import { DOCS_LAYOUTS } from 'components/doc';

const subItems = DOCS_LAYOUTS.map((props) => ({
  name: props.tabLabel,
  to: props.startPath,
  isActiveMatch: props.isActiveMatch,
}));

// const DrawerMenu = ({ location }) => (
//   <Transition
//     as={Fragment}
//     enter="duration-200 ease-out"
//     enterFrom="opacity-0 scale-95"
//     enterTo="opacity-100 scale-100"
//     leave="duration-100 ease-in"
//     leaveFrom="opacity-100 scale-100"
//     leaveTo="opacity-0 scale-95"
//   >
//     <Popover.Panel
//       focus
//       className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20"
//     >
//       <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
//         <div className="pt-5 pb-6 px-5">
//           <DrawerMenuHeader />
// 
//           <div className="mt-8">
//             <nav className="grid gap-y-8">
//               {subItems.map((item) => (
//                 <MobileDropdownNavItem
//                   item={item}
//                   isActive={location.pathname.match(item.isActiveMatch)}
//                   key={item.name}
//                 />
//               ))}
//             </nav>
//           </div>
//         </div>
//       </div>
//     </Popover.Panel>
//   </Transition>
// );

const DrawerMenu = () => (<div />);

export default DrawerMenu;
