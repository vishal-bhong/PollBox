import NavBar from "../components/common/NavBar"
import PollResult from "../components/poll/PollResult"
import SideDrawer from "../components/common/SideDrawer"


const AllPollResultsPage = () => {
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
            ]
        },

        {
            id : 2,
            title : "Favourate ML Programming Language",
            description : "lets vote for the favourate programming language and decide which language is faourites between the geeks lets vote for the favourate programming language. and decide which language is faourites between the geeks",
            options : [
                { option : "python", votes : 52 }, 
                { option : "JavaScript", votes : 10 }, 
                { option : "java", votes : 38 }
            ]
        },

        {
            id : 3,
            title : "Favourate web Programming Language",
            description : "lets vote for the favourate programming language and decide which language is faourites between the geeks lets vote for the favourate programming language. and decide which language is faourites between the geeks",
            options : [
                { option : "JavaScript", votes : 49 }, 
                { option : "c#", votes : 26 },
                { option : "java", votes : 35 }
            ]
        },
    ]

    return (
        <>
            <NavBar />
            <SideDrawer />
            <div className="d-flex col-md-12">
                <div className="col-9">
                    {
                        arrObjects.map((pollResul) => <PollResult key={pollResul.id} pollResul={pollResul} /> )
                    }
                </div>

                <div className='col-3 vh-100 border border-dark'>
                    Advertisements
                </div>
            </div>
        </>

    )
}


export default AllPollResultsPage