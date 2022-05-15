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
    },
    date: {
        fontSize: '1.4rem',
        color: 'var(--green) !important'
    }
})

interface Props {
    showDetails?: boolean
}

export default function WorkTabs(props: Props) {
    const classes = useStyles()
    const tabsPanelsContent = [
        //Pivohub
        <div className={classes.tabPanelContent} >
            <div className={classes.date}>
                01/2020 - present
            </div>
            {!props.showDetails && (
                <ol>
                    <li className={classes.customLi}>1. Developed a product recommendation micro-service with Flask (using an IBCF algorithm and containerized with Docker).</li>
                    <li className={classes.customLi}>2. Developed multiple new features such as: an order history module, an imperial to metric unit converter, a retailer dashboard, a PDF micro-service, retailers maps and much more.</li>
                    <li className={classes.customLi}>3. Refactored multiple React class components to functional components in order to improve performance and maintainability.</li>
                    <li className={classes.customLi}>4. Wrote migration scripts in order to transit the database collections to a new model.</li>
                    <li className={classes.customLi}>5. Participated and contributed to the Agile Scrum environment.</li>
                </ol>
            )}
            {props.showDetails && (
                <div>
                    <p>I did an internship and I am also currently working part-time as a full stack developer at Pivohub while pursuing my studies at ETS. PivoHub is an e-commerce company that brings the brewing industry together in an online B2B marketplace to increase access to craft beverages. </p>
                    <br />
                    <p>During my internship I created a product recommendation micro-service using Flask and Docker. The service uses an IBCF (Item base collaborative filtering) algorithm in order to build a model for the recommendations. The model is then uploaded to an AWS Bucket and later used by the micro-service to expose an API endpoint where users can get multiple types of recommendations (by popularity, what you've ordered previously, formats etc.).</p>
                    <br />
                    <p>After that, I also worked on multiple features concerning the Webapp and the Api such as: an order history module, a retailer dashboard, a PDF micro-service, retailers maps and much more. The main stack that we use at Pivohub is React, Typescript, Node.js, Redux and MongoDB.</p>

                </div>
            )}

            <div className={classes.techStack}>
                React, Typescript, Node.js, Redux, MongoDB, Python, Flask, Git, Docker, AWS
            </div>
        </div>
        ,
        //Ongoing
        <div className={classes.tabPanelContent}>
            <div className={classes.date}>
                06/2019 - 08/2019
            </div>
            {!props.showDetails && (
                <ol>
                    <li className={classes.customLi}>1. Developed a magazine viewer in Javascript in order to be able to view magazines on the webapp.</li>
                    <li className={classes.customLi}>2. Developed a new feature to maintain logs of certain user actions and feedback (using Winston.js).</li>
                    <li className={classes.customLi}>3. Refactored a Wordpress plugin to be able to clean our media libraries on a regular basis to save disk space.</li>
                    <li className={classes.customLi}>4. Refactored a Trivia game in JS in order to add new features and allow multiple players to play simultaneously.</li>
                    <li className={classes.customLi}>5. Fixed multiple frontend and backend bugs on the platform</li>
                </ol>
            )}
            {props.showDetails && (
                <div>
                    <p>I worked in a Montreal startup called Ongoing. Ongoing is a company offering an entertainment solution on board buses and trains. It offers a system allowing passengers to have access to the Internet as well as an entertainment platform where passengers have access to films, series, games, books, magazines and much more, even offline.</p>
                    <br />
                    <p>I was a full stack developer in this company and I developed the Ongoing Web platform made mainly in PHP (CMS Wordpress) and Javascript. I also created a Wordpress module allowing the management of featured content on the platform (PHP), a magazine reader (JS), a popup system allowing the user to give feedback on the platform (JS & cookies) and I also contributed to fixing backend and frontend bugs in the platform (PHP, JS, CSS).</p>
                    <br />
                    <p>I also modified an existing Wordpress plugin so that it could allow us to remove unused media from the Wordpress media library as well as on disk to save space and keep our media up to date.</p>
                </div>
            )}
            <div className={classes.techStack}>
                Wordpress, Javascript, Node.js, PHP, HTML, CSS, Nginx
            </div>
        </div>
        ,
        //Pheidi
        <div className={classes.tabPanelContent} >
            <div className={classes.date}>
                03/2019 - 05/2019
            </div>
            {!props.showDetails && (
                <ol>
                    <li className={classes.customLi}>1. Developed a reservation module for a spa company using Javascript, HTML, CSS for the frontend and SQL for the backend queries.</li>
                    <li className={classes.customLi}>2. Created multiple complex SQL queries, functions and stored procedures required for certain modules.</li>
                    <li className={classes.customLi}>3. Developed API endpoints for sensors that are using the MQTT protocol in order to feed information to a dashboard.</li>
                </ol>
            )}
            {props.showDetails && (
                <div>
                    <p>I did my first internship at Pheidi. Pheidi is a company that offers custom-developed management tools for various businesses. During my internship, I participated in the design of these tools.</p>
                    <br />
                    <p>I worked on an appointment booking module for a company both at the front-end and back-end level (design of the frontend and queries/stored procedures in the backend). I also created an API and setup a broker for a project concerning the MQTT protocol.</p>
                    <br />
                    <p>During the internship I learned a lot about SQL queries/functions/procedures and relational database optimizations.</p>
                </div>
            )}
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
