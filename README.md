# Pines&Butter Recipe Finder App

A recipe finder app that answers to the question: "Too lazy to shop. What can I cook from my leftovers?"

Built with React and utilizes recipe data from Spoonacular API + ingredient autocomplete from Tasty API.

![Pines&Butter landing page](https://i.ibb.co/hmnJ5WR/2020-07-19-1.png)

Check out the [deployed site](https://pinesandbutter.netlify.app/)

## Core packages

1. Hooks, Context API - State management

2. React-Router - Routing

3. SCSS - Styling

4. Axios - Network call

## Features

1. Add/remove items in pantry

2. Search recipes according to pantry items

3. Search recipes according to keywords

4. Favorite/Unfavorite a recipe

5. Add an ingredient to grocery list

6. Remember the recipe that the grocery item was added from

7. Pantry item input autocomplete

## Running locally

Inside of your project file create an .env.local file with the following contents:

```txt
REACT_APP_API_KEY=<YOUR_API_KEY>
```

Then run ```npm i``` and ```npm start``` to see the app in action.

## Sections walkthrough

### Add ingredients to Pantry with autocomplete suggestions

![Add to Pantry](https://i.ibb.co/zVr1JbF/2020-07-20-1.png)

### Search for recipes from Pantry ingredients

![Pantry Recipe Search](https://i.ibb.co/SRL9sCg/2020-07-19-1.png)

### Faved Recipes (Recipe Book)

![Faved Recipe](https://i.ibb.co/XYtnD38/2020-07-20-9.png)

### Recipe Details

![Recipe Details](https://i.ibb.co/XYcyvx1/2020-07-20-4.png)

### Grocery List

![Grocery List](https://i.ibb.co/xGZ43PH/2020-07-20-8.png)


