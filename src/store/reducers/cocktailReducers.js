import {GET_COCKTAILS } from '../types'

const initialState = {
    cocktails:[],
    loading:true
}

export default function foo(state = initialState, action){

    switch(action.type){

        case GET_COCKTAILS:
        return {
            ...state,
            cocktails:action.payload,
            loading:false

        }
        default: return state
    }

}