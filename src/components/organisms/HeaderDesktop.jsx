import React, { useEffect, useState } from 'react';

import { twMerge } from 'tailwind-merge';
import { navLinks } from '../../../lib/constants/navigation';
import { PopoverMenu } from '../molecules/PopoverMenuEtapas';

const wrapper =
  'flex flex-col mx-auto w-full px-4 md:px-0 md:max-w-[720px] lg:max-w-[1140px] gap-[40px]';

export default function HeaderDesktop() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = {};
    const visibleSections = new Set(); // Przechowuje aktualnie widoczne sekcje

    navLinks.forEach(({ section }) => {
      const element = document.getElementById(section);
      if (element) {
        observers[section] = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                visibleSections.add(section); // Dodaj sekcję do widocznych
                setActiveSection(section);
              } else {
                visibleSections.delete(section); // Usuń sekcję, jeśli już nie jest widoczna
              }
            });

            // Jeśli żadna sekcja nie jest widoczna, ustaw `Etapas`
            if (visibleSections.size === 0) {
              setActiveSection('etapas');
            }
          },
          { threshold: 0.5 }
        );

        observers[section].observe(element);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => {
        observer.disconnect();
      });
    };
  }, []);



  return (
    <header className="fixed hidden lg:flex top-0 l-0 w-full h-[56px] z-50 bg-white">
      <nav className={twMerge(wrapper, 'h-full')}>
        <ul className="flex flex-row justify-between w-full h-full px-20">
          {navLinks.map((link) => (
            <li key={link.title} className="flex flex-col justify-center h-full">
              <a href={link.url} className="flex justify-center items-center">
                {link.title !== 'Etapas' ? (
                  <span className="text-darkBlue">{link.title}</span>
                ) : (
                  <PopoverMenu />
                )}
              </a>
              <div
                className={`w-full mt-2 h-[3px] bg-darkRed transition-opacity duration-300 ${
                  activeSection === link.section ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
