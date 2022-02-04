import { ADD_PRODUCT, DELETE_PRODUCT, SEARCH_PRODUCT, FILTER_PRICE_PRODUCT, FILTER_QUANTITY_PRODUCT } from "./actions";


const initialState = {products: []}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT: //upsert mode
            let d = [...state.products]
            let actionData = {...action.data}
            if(typeof actionData.update == "number"){
                d[actionData.update] = action.data
                delete d[actionData.update].update
            }else{
                delete actionData.update
                d.push(actionData)
            }
            
            return {...state, products: d}

        case DELETE_PRODUCT:
            let d2 = [...state.products]
            d2.splice(action.index, 1)
            return {...state, products: d2}
        default:
            return state

        case SEARCH_PRODUCT:
            return {...state, search: action.key}

        case FILTER_QUANTITY_PRODUCT:
            return {...state, quantityFilter: action.key}

        case FILTER_PRICE_PRODUCT:
            return {...state, priceFilter: action.key}
    }
}

export {productsReducer}