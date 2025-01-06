import { Popover } from '@ark-ui/react';
import { useState, useRef } from 'react';
import { stepsNavigation } from '../../../lib/constants/navigation';

export const PopoverMenu = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  function handleClose() {
    setIsPopoverOpen(false);
  }

  function handleOpenChange(details: { open: boolean }) {
    setIsPopoverOpen(details.open); // Correctly handle the `open` property
  }

  return (
    <Popover.Root open={isPopoverOpen} onOpenChange={handleOpenChange}>
      <Popover.Trigger>
        <Popover.Indicator>
          <li className="text-darkBlue">Etapas</li>
        </Popover.Indicator>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content ref={popoverRef}>
          <ul>
            {stepsNavigation.map((link, index) => (
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
  );
};
