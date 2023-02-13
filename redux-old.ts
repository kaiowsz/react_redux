import {createStore} from "redux"

const initialState = {
    counter: {
        count: 1
    }
}

const reducer = (state = initialState, action: any) => {

    switch (action.type) {
        case "increment":
            console.log(state.counter.count)
            return {
                ...state,
                counter: {
                    count: state.counter.count + 1
                }
            }

        case "decrement":
            console.log(state.counter.count)
            if(state.counter.count === 0) {
                alert("Menor que 0")
                return state
            } 
            return {
                ...state,
                counter: {
                    count: state.counter.count - 1 
                }
            }


        case "incrementAmount": {
            return {
                ...state,
                counter: {
                    count: state.counter.count + action.payload
                }
            }
        }
    
        default:
            return state
    }




}

export const store = createStore(reducer)