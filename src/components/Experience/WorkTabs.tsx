import { Box, Tab, Tabs, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const Container = styled.div`
  backdrop-filter: blur(6px);
`

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    tabs: {
        minWidth: 150,
    },
    tab: {
        fontSize: '1.8rem',
        textTransform: "none",
        "& .Mui-selected": {
            color: 'var(--green) !important',
        }
    },
    customTabIndicator: {
        background: 'var(--green) !important'
    },
    tabPanel: {
        fontSize: '1.8rem',
    },
    box: {
        justifyContent: 'center'
    }
})

export default function WorkTabs() {
    const classes = useStyles()
    const [value, setValue] = React.useState(0);
    const [width, setWidth] = React.useState<number>(window.innerWidth);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const tabPanels = (
        <>
            <TabPanel value={value} index={0}>
                <div className={classes.tabPanel} >
                    1. Developed a product recommendation micro-service with Flask (using an IBCF algorithm and
                    containerized with Docker).
                    <br />
                    2. Developed multiple new features such as: an order history module, an imperial to metric unit converter,
                    a retailer dashboard, a PDF micro-service, retailers maps and much more.
                    <br />
                    3. Refactored multiple React class components to functional components in order to improve
                    performance and maintainability.
                    <br />
                    4. Wrote migration scripts in order to transit the database collections to a new model.
                    <br />
                    5. Participated and contributed to the Agile Scrum environment.
                    Tech stack: (React, Typescript, Node.js, Redux, MongoDB, Python, Flask, Git, Docker, AWS)
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className={classes.tabPanel} >
                    1. Developed a product recommendation micro-service with Flask (using an IBCF algorithm and
                    containerized with Docker).
                    <br />
                    2. Developed multiple new features such as: an order history module, an imperial to metric unit converter,
                    a retailer dashboard, a PDF micro-service, retailers maps and much more.
                    <br />
                    3. Refactored multiple React class components to functional components in order to improve
                    performance and maintainability.
                    <br />
                    4. Wrote migration scripts in order to transit the database collections to a new model.
                    <br />
                    5. Participated and contributed to the Agile Scrum environment.
                    Tech stack: (React, Typescript, Node.js, Redux, MongoDB, Python, Flask, Git, Docker, AWS)
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className={classes.tabPanel} >
                    1. Developed a product recommendation micro-service with Flask (using an IBCF algorithm and
                    containerized with Docker).
                    <br />
                    2. Developed multiple new features such as: an order history module, an imperial to metric unit converter,
                    a retailer dashboard, a PDF micro-service, retailers maps and much more.
                    <br />
                    3. Refactored multiple React class components to functional components in order to improve
                    performance and maintainability.
                    <br />
                    4. Wrote migration scripts in order to transit the database collections to a new model.
                    <br />
                    5. Participated and contributed to the Agile Scrum environment.
                    Tech stack: (React, Typescript, Node.js, Redux, MongoDB, Python, Flask, Git, Docker, AWS)
                </div>
            </TabPanel>
        </>
    )

    const tabs = (
        [
            <Tab label={<span className={classes.tab}>Pivohub</span>} {...a11yProps(0)} />,
            <Tab label={<span className={classes.tab}>Ongoing</span>} {...a11yProps(1)} />,
            <Tab label={<span className={classes.tab}>Pheidi</span>} {...a11yProps(2)} />
        ]
    )

    const isMobile = width <= 820;

    return (
        <Container>
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                {!isMobile && (
                    <Box
                        sx={{ flexGrow: 1, bgcolor: '#ffffff05', display: 'flex' }}
                    >
                        <Tabs
                            className={classes.tabs}
                            orientation="vertical"
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                            classes={{
                                root: classes.tab,
                                indicator: classes.customTabIndicator
                            }}
                        >
                            {tabs}
                        </Tabs>
                        {tabPanels}
                    </Box>
                )}

                {isMobile && (
                    <>
                        <Box sx={{ flexGrow: 1, bgcolor: '#ffffff05', display: 'flex', justifyContent: 'center' }}>
                            <Tabs
                                className={classes.tabs}
                                orientation="horizontal"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs"
                                classes={{
                                    root: classes.tab,
                                    indicator: classes.customTabIndicator
                                }}
                                sx={{ borderBottom: 1, borderColor: 'divider' }}
                            >
                                {tabs}
                            </Tabs>
                        </Box>
                        <Box className={classes.box} sx={{ flexGrow: 1, bgcolor: '#ffffff05', display: 'flex' }}>
                            {tabPanels}
                        </Box>
                    </>
                )}
            </ScrollAnimation>
        </Container>
    );
}
