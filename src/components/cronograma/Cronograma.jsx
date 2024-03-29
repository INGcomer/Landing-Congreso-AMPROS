import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Dias from './dias/Dias';

import "./Cronograma.css"

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section id='Cronograma'>
            <div className="fondo arriba"></div>
            <span> Programa definitivo en proceso de finalización </span>
            <Box sx={{ width: '100%' }} className="cronograma_box">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        textColor="secondary"
                        indicatorColor="secondary"
                        variant="fullWidth"
                        centered
                    >
                        <Tab label="20 de septiembre" {...a11yProps(0)} sx={{
                            color: "white"
                        }} />
                        <Tab label="21 de septiembre" {...a11yProps(1)}
                            sx={{
                                color: "white"
                            }} />
                        <Tab label="22 de septiembre" {...a11yProps(2)}
                            sx={{
                                color: "white"
                            }} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Dias dia={0} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Dias dia={1} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Dias dia={2} />
                </TabPanel>
            </Box>
        </section>
    );
}