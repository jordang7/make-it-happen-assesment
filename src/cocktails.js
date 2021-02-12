import React from 'react';

import axios from 'axios';


export default class CocktailList extends React.Component {
    state = {
      cocktails: []
    }

    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then(res=>{
        const cocktails = res.data.drinks;
        for(var i=0;i<cocktails.length;i++){
            var drink = cocktails[i];
            let index = 1;
            let ingredientArray = [];
            while (drink['strIngredient' + index]) {
                ingredientArray.push({name: drink['strIngredient' + index], amount: drink['strMeasure' + index] ? drink['strMeasure' + index]: "A dash "});
                index++;
            }
            drink.ingredientArray=ingredientArray
    }
        this.setState({ cocktails });
            }).catch(error =>console.error(`Error: ${error}`));
    }


    render() {

      return (
        <ul>
          { (this.state.cocktails).map(cocktails => <li key={cocktails.strDrink}> {cocktails.strDrink} <ul>
              <li>Glass: {cocktails.strGlass}</li>
              <li>Ingredients:
                <ul>{ (cocktails.ingredientArray).map(ingredient => <li>{ingredient.amount} of {ingredient.name}</li>)}</ul>
                </li>
                <li>
                  Instructions:{cocktails.strInstructions}
              </li>
          </ul>
          </li>)}
        </ul>
      )
    }
}
