import React from 'react';

import axios from 'axios';


export default class CocktailList extends React.Component {
    state = {
      cocktails: [],
      ingredients:[]
    }

    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a").then(res=>{
        const cocktails = res.data.drinks;
        this.setState({ cocktails });
            }).catch(error =>console.error(`Error: ${error}`));
    }


    render() {

      return (
        <ul>
          { (this.state.cocktails).map(cocktails => <li key={cocktails.strDrink}> {cocktails.strDrink} <ul>
              <li>Glass: {cocktails.strGlass}</li>
              <li>
                  Instructions:{cocktails.strInstructions}
              </li>
          </ul>
          </li>)}
        </ul>
      )
    }
}
