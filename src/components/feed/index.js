/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          rose: colors.rose,
        }
      }
    }
  }
  ```
*/

import { Fragment } from 'react'
import { ChatAltIcon, TagIcon, UserCircleIcon } from '@heroicons/react/solid'

const activity = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Eduardo Benz', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 2,
    type: 'assignment',
    person: { name: 'Hilary Mahy', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: '2d ago',
  },
  {
    id: 3,
    type: 'tags',
    person: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'Bug', href: '#', color: 'bg-rose-500' },
      { name: 'Accessibility', href: '#', color: 'bg-indigo-500' },
    ],
    date: '6h ago',
  },
  {
    id: 4,
    type: 'comment',
    person: { name: 'Jason Meyers', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  },
]

const NDstats = [
    { label: 'Founded', value: '1996' },
    { label: 'Employees', value: '26' },
    { label: 'Beta Users', value: '1000+' },
    { label: 'Raised', value: '$1B' },
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Feed() {
  return (
    <div class="flex items-stretch ...">
    <div className="deanna-gumpf mx-5 mt-10 mb-40">
        {/* #3 */}
        <blockquote className="relative bg-white rounded-lg shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <p className="text-black text-center font-semibold">
                  Opening Q2
                </p>
                <img className="on-deck-icon mt-2" src="https://cdn.shopify.com/s/files/1/1209/2544/collections/Web-image_250x198.jpg?v=1552748614" />
                <div className="relative text-lg text-gray-700 font-medium mt-8">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    <a href="https://twitter.com/NDsoftball/status/1280268034343440384" target="_blank" rel="noreferrer noopener">
                      To be Irish, we will never back down from a challenge.
                    </a>
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center sm:items-start bg-irishGreen rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <img
                    className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-notreDameBlue"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <span className="relative ml-4 text-notreDameBlue font-semibold leading-6 sm:ml-24 sm:pl-1">
                  <p className="text-white font-semibold sm:inline">Deanna Gumpf</p>{' '}
                  <br />
                  <p className="sm:inline text-opacity-25">Head Coach</p>
                </span>
              </cite>
              <div className="mt-4">
                <dl className="grid grid-cols-4 gap-x-2 gap-y-4">
                  {NDstats.map((stat) => (
                    <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                      <dt className="text-sm text-center text-gray-500">{stat.label}</dt>
                      <dd className="text-base text-center font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4">
                </div>
              </div>
            </blockquote>
    </div>
    <div className="flow-root mx-5 mt-10 mb-40">
      <ul className="-mb-8">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== activity.length - 1 ? (
                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {activityItem.type === 'comment' ? (
                  <>
                    <div className="relative">
                      <img
                        className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                        src={activityItem.imageUrl}
                        alt=""
                      />

                      <span className="absolute -bottom-0.5 -right-1 bg-white rounded-tl px-0.5 py-px">
                        <ChatAltIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div>
                        <div className="text-sm">
                          <a href={activityItem.person.href} className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </a>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Commented {activityItem.date}</p>
                      </div>
                      <div className="mt-2 text-sm text-gray-700">
                        <p>{activityItem.comment}</p>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === 'assignment' ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                          <UserCircleIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-1.5">
                      <div className="text-sm text-gray-500">
                        <a href={activityItem.person.href} className="font-medium text-gray-900">
                          {activityItem.person.name}
                        </a>{' '}
                        assigned{' '}
                        <a href={activityItem.assigned.href} className="font-medium text-gray-900">
                          {activityItem.assigned.name}
                        </a>{' '}
                        <span className="whitespace-nowrap">{activityItem.date}</span>
                      </div>
                    </div>
                  </>
                ) : activityItem.type === 'tags' ? (
                  <>
                    <div>
                      <div className="relative px-1">
                        <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                          <TagIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 py-0">
                      <div className="text-sm leading-8 text-gray-500">
                        <span className="mr-0.5">
                          <a href={activityItem.person.href} className="font-medium text-gray-900">
                            {activityItem.person.name}
                          </a>{' '}
                          added tags
                        </span>{' '}
                        <span className="mr-0.5">
                          {activityItem.tags.map((tag) => (
                            <Fragment key={tag.name}>
                              <a
                                href={tag.href}
                                className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                              >
                                <span className="absolute flex-shrink-0 flex items-center justify-center">
                                  <span
                                    className={classNames(tag.color, 'h-1.5 w-1.5 rounded-full')}
                                    aria-hidden="true"
                                  />
                                </span>
                                <span className="ml-3.5 font-medium text-gray-900">{tag.name}</span>
                              </a>{' '}
                            </Fragment>
                          ))}
                        </span>
                        <span className="whitespace-nowrap">{activityItem.date}</span>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}