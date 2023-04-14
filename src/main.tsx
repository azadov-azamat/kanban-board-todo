import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./redux/store";

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)
const container = document.getElementById('root') as HTMLElement

const root = createRoot(container)
root.render(app)