import React from 'react';

import classes from '../FromToInput/FromToInput.module.css'

export default function FromToSelector(props) {
    return (
        <div className='row justify-content-sm-around'>
            <div className='col-sm-5 col-md-4 col-lg-4 mt-4'>
                <select
                    className={classes.Disable + " browser-default custom-select"}
                    onChange={props.fromUnitHandler}
                    disabled={props.disableFromTo} 
                >
                    <option defaultChecked>Choose Unit From</option>
                    {
                        props.chosenUnits.map(unit =>
                            <option key={unit.name} value={unit.value} >{unit.name}</option>
                        )
                    }
                </select>
            </div>

            <div className='col-sm-5 col-md-4 col-lg-4 mt-4'>
                <select
                    className={classes.Disable + " browser-default custom-select"}
                    onChange={props.toUnitHandler}
                    disabled={props.disableFromTo} 
                >
                    <option defaultChecked>Choose Unit To</option>
                    {
                        props.chosenUnits.map(unit => 
                            <option key={unit.name} value={unit.value}>{unit.name}</option>
                        )
                    }
                </select>
            </div>
        </div>
    )
}
