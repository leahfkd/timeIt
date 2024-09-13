/*
 * Created Date: 2024-09-12T19:56:54                                           *
 * Author: Lei Fuentes                                                         *
 * Modified By: Lei Fuentes                                                    *
 * Last Modified: 2024-09-12T19:56:54                                          *
 */



import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './reducers/rootReducers'

export const store = configureStore(
   {
    reducer: rootReducers,
    // middleware: () => TODO ADD SAGA
   }
)
