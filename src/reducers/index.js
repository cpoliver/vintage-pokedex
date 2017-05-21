import { combineReducers } from 'redux';

import PokemonReducer from './PokemonReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  pokemon: PokemonReducer,
  selectedPokemonId: SelectionReducer
});
