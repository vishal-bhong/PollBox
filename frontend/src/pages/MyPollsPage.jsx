import NavBar from "../components/common/NavBar"
import PollResult from "../components/poll/PollResult"
import Polls from "../components/poll/Polls"
import SideDrawer from "../components/common/SideDrawer"


const MyPollsPage = () => {
    const arrObjects = [
        {
            id : 1,
            title : "Favourate Programming Language",
            description : "lets vote for the favourate programming language and decide which language is faourites between the geeks lets vote for the favourate programming language. and decide which language is faourites between the geeks",
            options : [
                { option : "python", votes : 14 }, 
                { option : "JavaScript", votes : 40 }, 
                { option : "c#", votes : 10 },
                { option : "java", votes : 36 }
            ],
            status : "expired"
        },
        
        {
            id : 2,
            title : "Favourate Programming Language",
            description : "lets vote for the favourate programming language and decide which language is faourites between the geeks lets vote for the favourate programming language. and decide which language is faourites between the geeks",
            options : [ "Python", "JavaScript", "java" ],
            status : "active"
        },

        {
            id : 3,
            title : "Favourate ML Programming Language",
            description : "lets vote for the favourate programming language and decide which language is faourites between the geeks lets vote for the favourate programming language. and decide which language is faourites between the geeks",
            options : [
                { option : "python", votes : 52 }, 
                { option : "JavaScript", votes : 10 }, 
                { option : "java", votes : 38 }
            ],
            status : "expired"
        },
        {
            id : 4,
            title : "Favourate Programming Language",
            description : "lets vote for the favourate programming language and decide which language is faourites between the geeks lets vote for the favourate programming language. and decide which language is faourites between the geeks",
            options : [ "Python", "JavaScript", "C#", "java" ],
            status : "active"
        }
    ]

    return (
        <>
            <NavBar />
            <SideDrawer />

            <div className="d-flex col-md-12">
                <div className="col-9">
                    {
                        arrObjects.map((poll) => {
                            return (
                                <>
                                {
                                    poll.status === "expired" ? (
                                        <PollResult key={poll.id} pollResul={poll} />
                                    ) : (
                                        <Polls key={poll.id} poll={poll} />
                                    )
                                }
                                </>
                            )
                        } )
                    }
                </div>
                <div className='col-3 vh-100 border border-dark'>
                    Advertisements
                </div>
            </div>
        </>
    )
}


export default MyPollsPage