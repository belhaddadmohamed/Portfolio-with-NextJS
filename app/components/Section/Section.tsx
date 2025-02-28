import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={className + " py-20"}>
      {children}
    </section>
  );
};

export default Section;