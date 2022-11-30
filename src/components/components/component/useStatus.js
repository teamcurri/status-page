import { useState, useEffect } from 'react'
import statuses from './statuses'

export default labels => {
  const [status, setStatus] = useState()

  useEffect(() => {
    setStatus(
      Object.values(statuses).find(status =>
        labels.find(label => label.name === status.name.toLowerCase())
      )
    )
  }, [labels])

  if (!status) setStatus(statuses.unknown)

  return [status]
}
