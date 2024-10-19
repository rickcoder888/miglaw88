import React from 'react'

interface SectionDividerProps {
  className?: string
}

const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div className={`py-12 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex justify-center items-center">
          <div className="w-1/3 h-px bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-red-600 mx-4"></div>
          <div className="w-1/3 h-px bg-gray-300"></div>
        </div>
      </div>
    </div>
  )
}

export default SectionDivider