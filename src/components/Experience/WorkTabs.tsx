import { makeStyles } from '@mui/styles';
import * as React from 'react';
import CustomTabs from '../shared/CustomTabs';

const useStyles = makeStyles({
    tabPanelContent: {
        fontSize: '1.8rem',
    },
    techStack: {
        fontSize: '1.4rem',
        marginTop: '2rem',
        color: 'var(--green) !important'
    },
    customLi: {
        marginBottom: '1rem'
    }
})

export default function WorkTabs() {
    const classes = useStyles()
    const tabsPanelsContent = [
        <div className={classes.tabPanelContent} >
            <ol>
                <li className={classes.customLi}>1. Developed a product recommendation micro-service with Flask (using an IBCF algorithm and containerized with Docker).</li>
                <li className={classes.customLi}>2. Developed multiple new features such as: an order history module, an imperial to metric unit converter, a retailer dashboard, a PDF micro-service, retailers maps and much more.</li>
                <li className={classes.customLi}>3. Refactored multiple React class components to functional components in order to improve performance and maintainability.</li>
                <li className={classes.customLi}>4. Wrote migration scripts in order to transit the database collections to a new model.</li>
                <li className={classes.customLi}>5. Participated and contributed to the Agile Scrum environment.</li>
            </ol>
            <div className={classes.techStack}>
                React, Typescript, Node.js, Redux, MongoDB, Python, Flask, Git, Docker, AWS
            </div>
        </div>
        ,
        <div className={classes.tabPanelContent}>
            <ol>
                <li className={classes.customLi}>1. Developed a magazine viewer in Javascript in order to be able to view magazines on the webapp.</li>
                <li className={classes.customLi}>2. Developed a new feature to maintain logs of certain user actions and feedback (using Winston.js).</li>
                <li className={classes.customLi}>3. Refactored a Wordpress plugin to be able to clean our media libraries on a regular basis to save disk space.</li>
                <li className={classes.customLi}>4. Refactored a Trivia game in JS in order to add new features and allow multiple players to play simultaneously.</li>
                <li className={classes.customLi}>5. Fixed multiple frontend and backend bugs on the platform</li>
            </ol>
            <div className={classes.techStack}>
                Wordpress, Javascript, Node.js, PHP, HTML, CSS, Nginx
            </div>
        </div>
        ,
        <div className={classes.tabPanelContent} >
            <ol>
                <li className={classes.customLi}>1. Developed a reservation module for a spa company using Javascript, HTML, CSS for the frontend and SQL for the backend queries.</li>
                <li className={classes.customLi}>2. Created multiple complex SQL queries, functions and stored procedures required for certain modules.</li>
                <li className={classes.customLi}>3. Developed API endpoints for sensors that are using the MQTT protocol in order to feed information to a dashboard.</li>
            </ol>
            <div className={classes.techStack}>
                C#, SQL, ASP.NET, Javascript, HTML, CSS
            </div>
        </div>
    ]

    const tabsNames = (
        [
            "Pivohub",
            "Ongoing",
            "Pheidi"
        ]
    )

    return (
        <CustomTabs tabsNames={tabsNames} tabsPanelsContent={tabsPanelsContent} />
    );
}
