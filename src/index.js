import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import {store} from './store'
import AddEventForm from './routes/addEventForm';
import Map from './routes/map';

import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {
                <Provider store={store}>
                    <App />
                </Provider>
            }>
                <Route path='addEventForm/:id' element={<AddEventForm />} />
                <Route index element={<Map />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>
    , document.getElementById('root'))
