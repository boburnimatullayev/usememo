import React, { memo } from 'react'

const List1 = ({list1}) => {
    console.log(`list1`)
  return (
    <div>
        {
            list1.map((item,index) =>(
                <p key={index}>{item}</p>
            ))
        }
    </div>
  )
}

export default  memo(List1)