
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
                <ul>
          { (cocktails).map(cocktails => <li key={cocktails.strDrink}> {cocktails.strDrink} <ul>
              <li>Glass: {cocktails.strGlass}</li>
              <li>Ingredients:
                <ul>{ (cocktails.ingredientArray).map(ingredient => <li key={ingredient.name}>{ingredient.amount} of {ingredient.name}</li>)}</ul>
                </li>
                <li>
                  Instructions: {cocktails.strInstructions}
              </li>
          </ul>
          </li>)}
        </ul>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({cocktails:state.cocktails})

export default connect(mapStateToProps, {getCocktails})(cocktails)