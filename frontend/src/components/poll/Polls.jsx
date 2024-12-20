import React from 'react'
import './Polls.css'

const Polls = ({ poll }) => {
    const [ selectedOption, setSelectedOption ] = React.useState("");

    const handleChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const handleVote = () => {
        if(selectedOption === "") alert("please select any option");
        else {
            alert(`voted successfully to ${selectedOption}`)
        }
    }

    return (
        <>
            <div className='poll mb-3 border border-light m-4'>
                <h3 className='pollTitle m-2'>{poll.title}</h3>
                <p className='pollDesc m-3 text-info'>{poll.description}</p>
                {
                    poll.options.map((option)=> {
                        return (
                            <div className='m-2 ps-3    '>
                                <input
                                   type='radio'
                                   value = {option}
                                   checked={option === selectedOption}
                                   onChange={handleChange}
                                   id={`option - ${option}`}
                                    />
                                <label htmlFor={`option - ${option}`}>{option}</label>
                            </div>
                        )
                    })
                }
                <div className='d-flex justify-content-between'>
                    <button type='submit' onClick={handleVote} className='btn btn-sm btn-outline-primary px-5 ms-3 mb-2'>Vote</button>
                    <p className='text-danger rounded-pill me-5'>expired</p>
                </div>
            </div>
        </>
    )
}

export default Polls;