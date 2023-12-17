import React from 'react'
import { Box } from '@mui/material'

function Result({ srcCode }) {
    return (
        <Box style={{ height: 225 }}>
            <iframe
                srcDoc={srcCode}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
            >
            </iframe>
        </Box>
    )
}

export default Result