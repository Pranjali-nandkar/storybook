import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Accordion } from './components/Accordion/Accordion';

const App: React.FC = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const accordionItems = [
    { title: 'Accordion panel 1', content: 'Content for panel 1' },
    { title: 'Accordion panel 2', content: 'Content for panel 2' },
    { title: 'Accordion panel 3', content: 'Content for panel 3' },
  ];

  return (
    <div>
      <Navbar brand="My Brand" links={links} />
      {/* Main content */}
      <main className="ui-bg-background ui-text-text p-6">
        <h1>Welcome to My Brand's Website</h1>
        {/* Other app components */}
      </main>

      {/* Accordion Section */}
      <section className="p-6">
        <Accordion items={accordionItems} />
      </section>
    </div>
  );
}

export default App;
