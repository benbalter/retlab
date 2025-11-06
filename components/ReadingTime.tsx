import React from 'react'

interface ReadingTimeProps {
  content: string
}

const ReadingTime: React.FC<ReadingTimeProps> = ({ content }) => {
  // Calculate reading time based on word count
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)

  return (
    <div className="text-gray-600 dark:text-gray-400 mb-3">
      <i className="far fa-clock"></i> {minutes} min read
    </div>
  )
}

export default ReadingTime
