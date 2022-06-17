import * as React from 'react';
import { logoStyle } from './myStyle';

const Header = () => {
    return (
        <div className="ui fixed menu" >
            <div className="ui container centered">
                <h2 style={logoStyle}>My Library</h2>
            </div>
        </div>
    )
}

export default Header;
