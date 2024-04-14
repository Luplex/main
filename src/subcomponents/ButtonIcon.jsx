import { PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'


const ButtonIcon = ({ label }) => {
  return (
    <button className="bg-custom-blue border-custom-blue border rounded-lg inline-flex items-center justify-center py-2 px-4 text-sm font-medium text-white hover:bg-blue-700">
      <span className="mr-2">
        <svg
          width={24}
          height={24}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <PlusCircleIcon />
        </svg>
      </span>
      {label}
    </button>
  )
}

export default ButtonIcon
