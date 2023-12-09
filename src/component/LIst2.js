import React, { memo } from 'react'

const LIst2 = ({list2}) => {
    console.log(`list2`)
  return (
    <div>
        {
            list2().map((item,index) =>(
                <p key={index}>{item}</p>
            ))
        }
    </div>
  )
}

export default  memo(LIst2)