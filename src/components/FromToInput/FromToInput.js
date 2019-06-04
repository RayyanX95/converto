import React from 'react';

export default function FromToInput(props) {
    
    return (
        <div className='row justify-content-sm-around'>
            {/* from input */}
            <div className='col-sm-5 col-md-4 col-lg-4 mt-4 input-group mb-3'>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">From</span>
                </div>
                <input type="number" onChange={props.fromChgHdl} className="form-control" value={props.fromValue} />
            </div>

            {/* to input */}
            <div className='col-sm-5 col-md-4 col-lg-4 mt-4 input-group mb-3'>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">To</span>
                </div>
                <input type="number" className="form-control" value={props.toValue} disabled/>
            </div>
        </div>
    )
}
