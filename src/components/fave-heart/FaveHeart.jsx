import React, { useContext } from 'react';

import AppContext from '../../context/app.context';

import { ReactComponent as HeartLogo } from '../../assets/heart2.svg';
import { ReactComponent as FullHeartLogo } from '../../assets/fullheart.svg';

import './FaveHeart.scss';

const FaveHeart = ({ recipe }) => {
    const { id, title, image } = recipe;
    const { favs, addFav, removeFav } = useContext(AppContext);

    let faved = false;
    if (favs.length > 0) {
        if (favs.map(fav => fav.id).includes(id)) {
            faved = true;
        } 
    }

    const addToFav = () => {
        faved = true;
        addFav({ id, title, image });
    }

    const removeFromFav = () => {
        faved = false;
        removeFav(id);
    }

    return (
        <div className="fave-heart">
            {
                faved ?
                (
                    <FullHeartLogo 
                        className='fav-logo' 
                        onClick={() => removeFromFav()} />
                ) : (
                    <HeartLogo 
                        className='fav-logo' 
                        onClick={() => addToFav()} />
                ) 
            }
        </div>
    )
}
 
export default FaveHeart;