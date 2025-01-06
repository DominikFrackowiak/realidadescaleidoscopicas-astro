import { Popover } from '@ark-ui/react';
import { useState, useRef } from 'react';
import { mobileNavigation } from '../../../lib/constants/navigation';

import { FaBars } from 'react-icons/fa6';

export default function PopoverMobileMenu() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  function handleClose() {
    setIsPopoverOpen(false);
  }

  function handleOpenChange(details: { open: boolean }) {
    setIsPopoverOpen(details.open); // Correctly handle the `open` property
  }

  return (
    <div className='flex justify-center items-center fixed top-5 right-2 z-50 h-10 w-10 rounded-full bg-darkBlue bg-opacity-40'>
      <Popover.Root open={isPopoverOpen} onOpenChange={handleOpenChange}>
        <Popover.Trigger>
          <Popover.Indicator>
            <FaBars className='text-2xl text-white'/>
          </Popover.Indicator>
        </Popover.Trigger>
        <Popover.Positioner>
          <Popover.Content ref={popoverRef}>
            <ul>
              {mobileNavigation.map((link, index) => (
                <li
                  key={link.title}
                  className="flex flex-column px-4 py-2 justify-center bg-white text-darkBlue"
                  style={index === 0 ? { paddingTop: '10px' } : {}}
                  onClick={handleClose}
                >
                  <a href={link.url} onClick={handleClose}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    </div>
  );
};
