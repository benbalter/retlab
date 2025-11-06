import React from 'react'
import Link from 'next/link'

const MiniBio: React.FC = () => {
  return (
    <div>
      <div className="float-start pt-1 pe-3">
        <img
          src={`https://avatars.githubusercontent.com/benbalter?s=100`}
          width="100"
          height="100"
          alt="Ben Balter"
          className="rounded"
        />
      </div>
      <p>
        Ben Balter is an attorney, open source developer, and product manager.{' '}
        <Link href="/about/">More about the author &rarr;</Link>
      </p>
    </div>
  )
}

export default MiniBio
