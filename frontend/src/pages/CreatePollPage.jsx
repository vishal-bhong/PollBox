import NavBar from "../components/common/NavBar"
import SideDrawer from "../components/common/SideDrawer"
import CreatePoll from "../components/poll/CreatePoll"

const CreatePollPage = () => {
    return (
        <>
            <NavBar />
            <SideDrawer />
            <div className="d-flex justify-content-center mt-5">
                <CreatePoll />
            </div>
        </>
    )
}

export default CreatePollPage