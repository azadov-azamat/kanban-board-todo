import {useState} from 'react'
import {ChakraProvider, theme} from "@chakra-ui/react";
import KanbanBoard from "./components/KanbanBoard";

function App() {

    return (
        <ChakraProvider theme={theme}>
            <div className="min-h-[85vh]">
                <div className="my-12 mx-0 flex justify-center items-center h-[10vh]">
                    <h1>Xalq bank task</h1>
                </div>
                <KanbanBoard/>
            </div>
        </ChakraProvider>
    )
}

export default App
