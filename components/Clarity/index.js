import React from 'react'
import Head  from 'next/head'

import CLARITY_PIXEL_1 from './microsoft/clarity-1'

export default ({name}) => {

  return(
    <Head>
      {name === 'CLARITY_PIXEL_1' && <CLARITY_PIXEL_1 />}
    </Head>
  )
}