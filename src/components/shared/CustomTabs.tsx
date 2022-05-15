import { Box, Tab, Tabs } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import TabPanel from './TabPanel';

function tabProps(index: number) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
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
    container: {
        backdropFilter: 'blur(6px)'
    }
})

interface Props {
    tabsPanelsContent: JSX.Element[]
    tabsNames: String[]
}

export default function CustomTabs(props: Props) {
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

    const isMobile = width <= 820;

    const tabsPanels = props.tabsPanelsContent.map((tabPanelContent, index) => (
        <TabPanel key={`tab-panel-${index}`} value={value} index={index}>{tabPanelContent}</TabPanel>
    ))

    const tabs = props.tabsNames.map((tabName, index) => (
        <Tab key={`tab-${index}`} label={<span className={classes.tab}>{tabName}</span>} {...tabProps(index)} />
    ))

    return (
        <div className={classes.container}>
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
                        {tabsPanels}
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
                                aria-label="Horizontal tabs"
                                classes={{
                                    root: classes.tab,
                                    indicator: classes.customTabIndicator
                                }}
                                sx={{ borderBottom: 1, borderColor: 'divider' }}
                            >
                                {tabs}
                            </Tabs>
                        </Box>
                        <Box sx={{ flexGrow: 1, bgcolor: '#ffffff05', display: 'flex' }}>
                            {tabsPanels}
                        </Box>
                    </>
                )}
            </ScrollAnimation>
        </div>
    );
}
