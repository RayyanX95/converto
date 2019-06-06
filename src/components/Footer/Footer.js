import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.Footer + ' mt-5'}>
            <p className="font-italic text-center pt-4">Converto.com © 2019 All rights reserved</p>
        </div>
    )
}

export default Footer;
