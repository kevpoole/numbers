import { useState } from "react"


type NumProps = {
    num: number | undefined
}

function Num({num}: NumProps) {
    const [isVisible, setIsVisible] = useState(true)
  return (
    <>
    {isVisible && <div onClick={() => setIsVisible(false)} className="h-8 py-8 px-4 text-2xl no-underline flex items-center justify-center border border-green-500 ">{num}</div>}
    {!isVisible && <div   onClick={() => setIsVisible(true)}className="h-8 py-8 px-4 text-2xl flex items-center justify-center "></div>}
    </>
  )
}
export default Num