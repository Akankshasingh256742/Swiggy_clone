import {configureStore} from '@reduxjs/toolkit'
import cartreducer from './cartslice'

const appStore = configureStore({
     reducer : {
        cart : cartreducer,
     }
})

export default appStore