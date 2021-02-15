import React from 'react';

import {GET_COCKTAILS, COCKTAILS_ERROR} from '../types'
import axios from 'axios';


export const getCocktails = () => async dispatch => {

  try{
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then(({ data }) => {
        const formatted = formatIngredients(data.drinks);
        dispatch({type: GET_COCKTAILS,
          payload: formatted});
          });
  }
  catch(e){
      dispatch( {
          type: COCKTAILS_ERROR,
          payload: console.log(e),
      })
  }

}

  function formatIngredients(data) {
    const cocktails = data;
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

    return cocktails
  }