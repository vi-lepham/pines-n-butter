import React, { useContext } from 'react';

import LocalDataContext from '../../context/local-data/LocalDataContext';

import { ReactComponent as HeartLogo } from '../../assets/heart2.svg';
import { ReactComponent as FullHeartLogo } from '../../assets/fullheart.svg';

import './FaveHeart.scss';

const FaveHeart = ({ recipe }) => {
    const { id, title, image } = recipe;
    const { favs, addFav, removeFav } = useContext(LocalDataContext);

    let faved = false;
    const favedItemsIds = favs.map(fav => fav.id);

    if (favs.length && favedItemsIds.includes(id)) {
        faved = true
    } else return

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
