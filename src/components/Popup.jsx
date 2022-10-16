import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Popup = ({movie1}) => {
  return (
		<Popover className="basis-1/6 ">
			{({ open }) => (
			<>
				<Popover.Button
				className={`
					${open ? ' ' : 'text-opacity-90'}
				    group flex items-center rounded-md text-base font-medium outline outline-1 px-2 text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
				>
				<span className="w-2 mr-12 text-white">Details</span>
				
				<ChevronDownIcon
					className={`${open ? 'rotate-180' : 'text-opacity-70'}
					h-6 w-6 transition duration-150 ease-in-out group-hover:text-opacity-80`}
					aria-hidden="true"
				/>
				</Popover.Button>

				<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
				>

				<Popover.Panel className="absolute left-1/3 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xlt">
					<div className="overflow-hidden rounded-lg  ">
				
					<div className="p-4">
						<a
						href="##"
						className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
						>
										
						<span className="block text-sm text-white mb-4">
						 <span className='text-gray-500'> Released:</span> {movie1.Year}
						</span>
						<span className="block text-sm text-white mb-4">
						  <span className='text-gray-500'>Type:</span> {movie1.Type}
						</span>
						<span className="block text-sm text-white">
						  <span className='text-gray-500'>Title:</span> {movie1.Title}
						</span>
						</a>
					</div>
					
					</div>
				</Popover.Panel>
				</Transition>
			</>
			)}
		</Popover>
  )
}

export default Popup