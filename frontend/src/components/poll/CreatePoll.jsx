import React from "react";
import './CreatePoll.css'

const CreatePoll = () => {
    const [ optionCount, setOptionCount ] = React.useState(3);
    const [ options, setOptions ] = React.useState([ { id: 1, text: "" }, { id: 2, text: "" } ]);

    const addOption = () => {
        setOptions([ ...options, { id : optionCount, text: "" }]);
        setOptionCount((prev) => prev + 1);
    }

    const handleAddPoll = () => {
        console.log(options);
    }

    return (
        <div className="createPoll border border-secondary p-4 col-6 m-5 rounded-4">
            <div className="d-flex justify-content-center">
                <h3 className="pageTitle">Create Poll</h3>
            </div>

            <div className="d-flex justify-content-between mt-5">
                <label htmlFor="title" className="form-label fw-medium fs-5 ms-5">Title : </label>
                <input type="text" id='title' className="form-control-sm col-9"/>
            </div>

            <div className="d-flex justify-content-between mt-4">
                <label htmlFor="title" className="form-label fw-medium ms-2 fs-5">Description : </label>
                <textarea type="text" id='description' className="form-control-sm col-9"/>
            </div>
            <p className="fs-5 fw-medium mt-5 ms-3 text-info">Enter Options in following fields :</p>

            {
                options.map((option) => {
                    return (
                        <div className="d-flex justify-content-between mt-4">
                            <lable htmlFor={`option - ${option.id}`} className="form-label fw-medium ms-4 fs-5">{`Option ${option.id} : `}</lable>
                            <input 
                                type="text" 
                                id={`option - ${option.id}`} 
                                className="form-control-sm col-9" 
                                value={option.text}
                                onChange={(e) => setOptions( options.map((opt) => opt.id === option.id ? { ...opt, text: e.target.value } : opt) )}
                            />
                        </div>
                    )
                })
            }

            <div className="d-flex justify-content-center mt-4">
                <i className="bi bi-plus-circle h2 text-success" type='button' onClick={addOption}></i>
            </div>

            <div className="d-grid col-6 mx-auto mt-4">
                <button className="btn btn-primary"onClick={handleAddPoll}>Add Poll</button>
            </div>
        </div>
    )
}

export default CreatePoll;
