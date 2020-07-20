import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppProvider from './context/app.state';

import Header from './components/header/Header';
import PantryPage from './pages/pantry/PantryPage';
import FavoritesPage from './pages/favorites/FavoritesPage';
import GroceryListPage from './pages/grocery-list/GroceryListPage';
import SearchPage from './pages/search/SearchPage';
import RecipeDetailsPage from './pages/recipe-details/RecipeDetailsPage';

import './App.css';

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <div className="nav">
          <Header />
        </div>
        <div className="main">
          <Switch>
            <Route exact path='/' component={PantryPage} />
            <Route exact path='/favorites' component={FavoritesPage} />
            <Route exact path='/grocerylist' component={GroceryListPage} />
            <Route path='/search' component={SearchPage} />
            <Route path='/recipe/:recipeId' component={RecipeDetailsPage} />
          </Switch>
        </div>
      </div>
    </AppProvider>
  )
}

export default App;
