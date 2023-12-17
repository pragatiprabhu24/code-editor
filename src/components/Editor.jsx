import { useState } from 'react';
import { Box, Tooltip, styled } from '@mui/material';
import { Clear } from '@mui/icons-material';
import CodeMirror from "@uiw/react-codemirror";


const Container = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;    
`

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
`
const Heading = styled(Box)`
    background: #1d1e22;
    padding: 9px 12px;
    display: flex;
`

const Editor = ({ language, icon, value, color, onChange, extension }) => {
    const [open, setOpen] = useState(true);

    const handleClearCode = () => {
        onChange('');
    };

    return (

        <Container style={open ? null : { flexGrow: 0 }}>
            <Header>
                <Heading>
                    <Box
                        component="span"
                        style={{
                            background: color,
                            borderRadius: 5,
                            marginRight: 5,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            color: '#000',
                            paddingBottom: 2
                        }}
                    >
                        {icon}
                    </Box>
                    {language}
                </Heading>
                <Tooltip title="Clear">
                    <Clear
                        fontSize="small"
                        style={{ alignSelf: 'center', cursor: 'pointer' }}
                        onClick={handleClearCode}
                    />
                </Tooltip>
            </Header>

            <CodeMirror
                value={value}
                height="300px"
                width='100%'  // Set width to 100% for responsiveness
                theme="dark"
                extensions={[extension(true)]}
                onChange={onChange}
                style={{ fontSize: 18, wordWrap: 'break-word' }}
            />
        </Container>
    )
}

export default Editor;
