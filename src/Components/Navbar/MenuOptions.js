import React from 'react';
import { Ul } from './StyleNavbar';

const MenuOptions = ({navList, viewOption}) => {

    return(
        <Ul viewOption={viewOption}>
            {navList?.map((item, index) => (
                <li key={`${item.name}-${index}`}>{item.name}</li>
            ))}
        </Ul>
    )
}
export default MenuOptions;