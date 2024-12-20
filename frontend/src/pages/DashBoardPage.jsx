import React from 'react'

import NavBar from '../components/common/NavBar';
import SideDrawer from '../components/common/SideDrawer';
import Polls from '../components/poll/Polls';


const DashBoardPage = () => {
    const arrObjects = [
        {
            id : 1,
            title : "Favourate Programming Language",
            description : "lets vote for the favourate programming language and decide which language is faourites between the geeks lets vote for the favourate programming language. and decide which language is faourites between the geeks",
            options : [ "Python", "JavaScript", "C#", "java" ]
        },

        {
            id : 2,
            title : "Favourate Programming Language",
            description : "lets vote for the favourate programming language and decide which language is faourites between the geeks lets vote for the favourate programming language. and decide which language is faourites between the geeks",
            options : [ "Python", "JavaScript", "java" ]
        },

        {
            id : 3,
            title : "Favourate Programming Language",
            description : "lets vote for the favourate programming language and decide which language is faourites between the geeks lets vote for the favourate programming language. and decide which language is faourites between the geeks",
            options : [ "JavaScript", "C#", "java" ]
        },
    ]

    return(
        <>
            <NavBar />
            <SideDrawer />
            <div className='d-flex col-md-12'>
                <div className='col-9' >
                    {
                        arrObjects.map((poll) => <Polls key={poll.id} poll={poll} />)
                    }
                </div>

                <div className='col-3 vh-100 border border-dark'>
                    Advertisements
                </div>
            </div>
        </>
    );
}

export default DashBoardPage;