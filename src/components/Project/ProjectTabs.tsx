import { makeStyles } from '@mui/styles';
import * as React from 'react';
import CustomTabs from '../shared/CustomTabs';

const useStyles = makeStyles({
    tabPanelContent: {
        fontSize: '1.8rem',
    },
    customLi: {
        marginBottom: '1rem'
    },
    date: {
        fontSize: '1.4rem',
        color: 'var(--main) !important'
    },
    link: {
        color: 'var(--main) !important'
    }
})

export default function ProjectTabs() {
    const classes = useStyles()
    const tabsPanelsContent = [
        <div className={classes.tabPanelContent} >
            <div className={classes.date}>
                2019
            </div>
            <div>
                <p>I created two challenges for Édouard-Montpetit CTF (Hack'EM), the first is a steganography challenge and the second a forensic challenge.</p>
                <br />
                <p>The steganography challenge consists of extracting hidden data from a mysterious card with weird patterns that was given to you. The forensic challenge consists of finding a missing person and you have some hidden information across multiple files (audio recordings, obstructed files etc.) about the whereabouts of that person.</p>
            </div>
        </div>
        ,
        <div className={classes.tabPanelContent}>
            <div className={classes.date}>
                2019
            </div>
            <div>
                <p>I created a web scraper that allows you to get the beer menu of "Dieu du Ciel!" (microbrewery in Montreal) in a scheduled manner each day and save it in a csv file.</p>
                <br />
                <p>Although this small project may seem useless at first sight, it is with the latter that I started learning and coding in python. Later, I found someone on Freelancer who was looking for an Instagram profile and post scraper. I therefore based myself on an existing scraper but which did not offer the functionalities required for the project.</p>
                <br />
                <p>The scraper had to fetch certain information (such as hashtags used in posts and comments and other relevant information) regarding the profile and posts of certains users</p>
            </div>
        </div>
        ,
        <div className={classes.tabPanelContent} >
            <div className={classes.date}>
                2017
            </div>
            <div>
                <p>I created a future house/EDM music promotional label and Youtube channel on which I posted videos that I created myself (with Adobe After Effects) of music that I was promoting..</p>
                <br />
                <p>I contacted directly the artists with whom I wanted to work with and I also received requests for promotions by other artists and promotional labels. I also created a Soundcloud page and a website for the label.</p>
                <p>Here's the link to the <a className={classes.link} href="https://www.youtube.com/channel/UCHP3V8AjDnuKw6YbXD6NauQ" target="_blank">Youtube channel</a> and <a className={classes.link} href="https://soundcloud.com/officialelitevibes" target="_blank">Soundcloud page</a></p>
            </div>
        </div>
    ]

    const tabsNames = (
        [
            "Hack'EM",
            "Web scrapers",
            "Elite Vibes"
        ]
    )

    return (
        <CustomTabs tabsNames={tabsNames} tabsPanelsContent={tabsPanelsContent} />
    );
}
