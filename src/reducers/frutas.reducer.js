import {actionsTypes} from '../constantes/frutas'

const INITIAL_STATE = {
    frutas: [],
}

const reducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionsTypes.ADICIONAR_FRUTA: 
            if(state.frutas.filter(e => e.nome === action.payload.nome).length > 0){
                alert('Fruta já cadastrada')
                return {frutas: state.frutas}
                break;
            }
            
            return { frutas: [...state.frutas, {...action.payload }] }

        case actionsTypes.REMOVER_FRUTA: 
            return { frutas: state.frutas.filter(x => x.id !== action.payload.id) }
        default:
            return state

    }
}

export {reducers};