/* cards */

/* having trouble with text-opacity and need to stipulate ideal images sizes */

const people = [
    {
      name: 'Whitney Francis',
      role: 'Copywriter',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    // More people...
  ]
  
  const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
  ]

  const NDstats = [
    { label: 'Founded', value: '1996' },
    { label: 'Employees', value: '26' },
    { label: 'Beta Users', value: '1000+' },
    { label: 'Raised', value: '$1B' },
  ]
export default function Cards() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">10 Active Fundraising Cohorts</h2>
            <p className="text-xl text-gray-500">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis
              neque.
            </p>
          </div>
          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
              {/* #1 */}
              <blockquote className="relative bg-white rounded-lg shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <p className="text-black font-semibold sm:inline">
                  Opening Q2
                </p>
                <img className="on-deck-icon" src="https://media-exp1.licdn.com/dms/image/C560BAQGvV_5x3UBMJA/company-logo_200_200/0/1571158216754?e=2159024400&v=beta&t=FNtl7xIQWKxcVVqON99w2TgHZ1coVC3kevZEHi0z6lI" />
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
                    Tincidunt integer commodo, cursus etiam aliquam neque, et.
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <img
                    className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                    src="https://www.fodors.com/assets/destinations/710086/lanikai-beach-kailua-winward-oahu-honolulu-and-oahu-hawaii-usa_main.jpg"
                    alt=""
                  />
                </div>
                <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                  <p className="text-white font-semibold sm:inline">Figma</p>{' '}
                  <br />
                  <p className="sm:inline">CEO</p>
                </span>
              </cite>
              <div className="mt-4">
                <dl className="grid grid-cols-4 gap-x-2 gap-y-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                      <dt className="text-sm text-gray-500">{stat.label}</dt>
                      <dd className="text-base font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4">
                </div>
              </div>
            </blockquote>
            {/* #2 */}
            <blockquote className="relative bg-white rounded-lg shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <p className="text-black font-semibold sm:inline">
                  Opening Q2
                </p>
                <img className="on-deck-icon" src="data:image/png;base64,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" />
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
                    Tincidunt integer commodo, cursus etiam aliquam neque, et.
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <img
                    className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                    src="https://www.fodors.com/assets/destinations/710086/lanikai-beach-kailua-winward-oahu-honolulu-and-oahu-hawaii-usa_main.jpg"
                    alt=""
                  />
                </div>
                <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                  <p className="text-white font-semibold sm:inline">Figma</p>{' '}
                  <br />
                  <p className="sm:inline">CEO</p>
                </span>
              </cite>
              <div className="mt-4">
                <dl className="grid grid-cols-4 gap-x-2 gap-y-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                      <dt className="text-sm text-gray-500">{stat.label}</dt>
                      <dd className="text-base font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4">
                </div>
              </div>
            </blockquote>
            {/* #3 */}
            <blockquote className="relative bg-white rounded-lg shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <p className="text-black font-semibold sm:inline">
                  Opening Q2
                </p>
                <img className="on-deck-icon" src="https://cdn.shopify.com/s/files/1/1209/2544/collections/Web-image_250x198.jpg?v=1552748614" />
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
                      <dt className="text-sm text-gray-500">{stat.label}</dt>
                      <dd className="text-base font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4">
                </div>
              </div>
            </blockquote>
          </ul>
        </div>
      </div>
    </div>
  )
}