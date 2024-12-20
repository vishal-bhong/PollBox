import './PollResult.css'

const PollResult = ({ pollResul }) => {

    return (
        <>
            <div className="pollResult mb-3 border border-light m-4">
                <h3 className='pollTitle m-2'>{pollResul.title}</h3>
                <p className='pollDesc m-3 text-info'>{pollResul.description}</p>
                    {
                        pollResul.options.map((option)=> {
                            return (
                                <div className='m-2 ps-3'>
                                    <label htmlFor={`option - ${option}`}>{option.option}</label>
                                    <div className="progress" id={`option - ${option.option}`}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: `${option.votes}%`}} aria-valuenow={option.votes} aria-valuemin="0" aria-valuemax="100">{option.votes}%</div>
                                    </div>
                                </div>
                            )
                        })
                    }

                <div className='d-flex justify-content-end'>
                    <p className='text-danger rounded-pill me-5'>expired</p>
                </div>
            </div>
        </>
    )
}

export default PollResult