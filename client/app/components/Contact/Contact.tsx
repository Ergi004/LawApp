import { Box } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Box sx={{ maxWidth: "100%", margin: "0px auto", textAlign: "center", backgroundColor: '#F9F5E7', paddingTop: '30px' }}>
    <Box sx={{ maxWidth: "90%", margin: "0 auto" }}>
      <h1 style={{ borderBottom: "1px black solid" }}>About Us</h1>
      <Box>
        <p style={{fontSize: '30px'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."</p>
      </Box>
    </Box>
  </Box>
  )
}

export default Contact
