import React from 'react';
import { withRouter } from 'react-router-dom';

import { ReactComponent as GroceryLogo } from '../../assets/grocery.svg';
import { ReactComponent as HeartLogo } from '../../assets/heart.svg';
import { ReactComponent as AppLogo } from '../../assets/food.svg';
import { ReactComponent as SearchLogo } from '../../assets/search.svg';

import './Header.scss';

const Header = ({ history }) => {
    
    return (
        <div className="header">
            <div className="logo" onClick={() => history.push('/')} >
                <AppLogo className='app-logo' />
                <h1>
                    Pines&Butter
                </h1>
            </div>

            <div className="grocery-n-favorites">
                <div className="grocery" onClick={() => history.push('/grocerylist')} >
                    <GroceryLogo className='grocery-logo' />
                    <span>Grocery List</span>
                </div>
                <div className="favorites" onClick={() => history.push('/favorites')} >
                    <HeartLogo className='heart-logo' />
                    <span>Recipe Book</span>
                </div>
            </div>

            <SearchLogo className='search-logo' onClick={() => history.push('/search')}
            />
        </div>
    )
}
 
export default withRouter(Header);
