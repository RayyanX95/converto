import React from 'react';


const UnitType = (props) => {
    // props.unitHandler();
    return (
        <div className='row justify-content-sm-center'>
            <div className='col-sm-10 col-md-6 col-lg-4 '>
                <select
                    className="browser-default custom-select"
                    onChange={props.unitHandler}
                >
                    <option defaultChecked value={0}>Choose Unit Type</option>
                    {
                        props.units.map(unit =>
                            <option key={unit.id} value={unit.id}>{unit.name}</option>
                        )
                    }
                </select>
            </div>
        </div>
    );
};

export default UnitType;