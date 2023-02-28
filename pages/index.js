import { useEffect, useState } from "react"

export default function Home() {

  const [Data, setData] = useState(null)
  useEffect(() => {
    fetch('/api/name/300')
      .then((res) => res.json())
      .then((data) => {
        setData(data.data)
      })
  }, [])

  return (
    <>
      <h1 className="text-3xl">{Data}</h1>
    </>
  )
}