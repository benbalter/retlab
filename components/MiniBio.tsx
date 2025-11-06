import React from 'react'
import Link from 'next/link'

const MiniBio: React.FC = () => {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0 pt-1">
        <img
          src={`https://avatars.githubusercontent.com/benbalter?s=100`}
          width="100"
          height="100"
          alt="Ben Balter"
          className="rounded"
        />
      </div>
      <p className="flex-1">
        Ben Balter is an attorney, open source developer, and product manager.{' '}
        <Link href="/about/" className="text-primary hover:underline">
          More about the author &rarr;
        </Link>
      </p>
    </div>
  )
}

export default MiniBio
