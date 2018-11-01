
        import { combineReducers }                      from 'redux';
        import { reducer as Form }                      from 'redux-form';

        import notifications from './reducer_notifications' 
import "aw-r_m from './reducer_"aw-r_m' 
import sign_up from './reducer_sign_up' 
import search from './reducer_search' 
import chat from './reducer_chat' 
import get_started from './reducer_get_started' 
import edit_profile from './reducer_edit_profile' 
import share from './reducer_share' 
import follow from './reducer_follow' 
import composite from './reducer_composite' 
import live from './reducer_live'

        const rootReducer = combineReducers({
            notifications : notifications 
,"aw-r_m : "aw-r_m 
,sign_up : sign_up 
,search : search 
,chat : chat 
,get_started : get_started 
,edit_profile : edit_profile 
,share : share 
,follow : follow 
,composite : composite 
,live : live 

        })

        export default rootReducer;

        