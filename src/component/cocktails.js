
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCocktails} from '../store/actions/cocktailsActions'

 class cocktails extends Component {
    componentDidMount(){
        this.props.getCocktails()
    }
    render() {
        const {cocktails} = this.props.cocktails


        return (
            <div>
                <ul >
          { (cocktails).map(cocktails => <li className="border" key={cocktails.strDrink}>
          <h3>{cocktails.strDrink} </h3>
          <ul>
                <li className="ing">Ingredients</li>
                <ul>{ (cocktails.ingredientArray).map(ingredient => <li key={ingredient.name}>{ingredient.amount} of {ingredient.name}</li>)}</ul>
                <li>
                  {cocktails.strInstructions}
              </li>
              <li>Serve in a {cocktails.strGlass}</li>
              <img src={cocktails.strDrinkThumb} alt={cocktails.strDrink} ></img>
          </ul>
          </li>)}
        </ul>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({cocktails:state.cocktails})

export default connect(mapStateToProps, {getCocktails})(cocktails)