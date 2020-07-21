import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';

import ApiDataContext from '../../context/api-data/ApiDataContext';

import RecipesList from '../../components/recipes-list/RecipesList';
import Spinner from '../../components/spinner/Spinner';
import FormInput from '../../components/form-input/FormInput';

import './SearchPage.scss';

const SearchPage = ({ history, match }) => {
    const [query, setQuery] = useState('')
    const { isLoading, recipes, getRecipes } = useContext(ApiDataContext);

    const handleChange = e => {
        setQuery(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();

        getRecipes(query);
        history.push(`${match.url}/${query}`)
    }
    
    return (
        <div className="search-page">
            <FormInput 
                className='search-input'
                name='query'
                type='text'
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                placeholder="Search a recipe..."
            />
            {
                isLoading ? 
                <Spinner /> : 
                (
                    recipes ? <RecipesList recipes={recipes} /> : <div className='no-result'>No result found</div>
                )
            }
        </div>
    )
}
 
export default withRouter(SearchPage);