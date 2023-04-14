import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const app = (
    <Provider store={store}>
        <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
        />
        <App/>
    </Provider>
)
const container = document.getElementById('root') as HTMLElement

const root = createRoot(container)
root.render(app)