import React from 'react'

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      {children}
    </section>
  )
}

export default Section