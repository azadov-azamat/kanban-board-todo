import React, {useState} from 'react';
import {arrayDataProps, arrayLanesProps} from "../interface/data.interface";
import {DndContext, rectIntersection} from "@dnd-kit/core";
import {Flex} from "@chakra-ui/react";
import AddCard from "./add-card";
import KanbanLane from "./kanban-lane";
import {toast} from "react-toastify";

export default function KanbanBoard() {

    const [todoItems, setTodoItems] = useState<arrayDataProps[]>([])
    const [doneItems, setDoneItems] = useState<arrayDataProps[]>([])
    const [inProgressItems, setInProgress] = useState<arrayDataProps[]>([])
    const [uItems, setUItems] = useState<arrayDataProps[]>([])

    const arrayLanes: arrayLanesProps[] = [
        {
            title: "Todo",
            items: todoItems,
            color: "red"
        },
        {
            title: "inProgress",
            items: inProgressItems,
            color: "yellow"
        },
        {
            title: "Done",
            items: doneItems,
            color: "green"
        },
        {
            title: "Unassigned",
            items: uItems,
            color: "gray"
        }
    ]

    const dateFormat = () => {
        const new_date = new Date()
        const date = `${new_date.getHours().toString().length <= 1 ? `0${new_date.getHours()}` : new_date.getHours()}:${new_date.getMinutes().toString().length <= 1 ? `0${new_date.getMinutes()}` : new_date.getMinutes()}  ${new_date.getDate().toString().length <= 1 ? `0${new_date.getDate()}` : new_date.getDate()}/${(new_date.getMonth() + 1).toString().length <= 1 ? `0${new_date.getMonth() + 1}` : new_date.getMonth() + 1}/${new_date.getFullYear()}`
        return date;
    }

    const addNewCard = (title: string) => {
        setUItems([...uItems, {
            title,
            date: dateFormat()
        }]);
    }

    const deleteCard = (parent: string, title: string) => {
        if (parent === "Todo") {
            const ArrayData = todoItems.filter(item=> item.title !== title)
            setTodoItems(ArrayData);
        } else if (parent === "Done") {
            const ArrayData = doneItems.filter(item=> item.title !== title)
            setDoneItems(ArrayData);
        } else if (parent === "Unassigned") {
            const ArrayData = uItems.filter(item=> item.title !== title)
            setUItems(ArrayData);
        } else {
            const ArrayData = inProgressItems.filter(item=> item.title !== title)
            setInProgress(ArrayData);
        }

        toast.success("Success delete Item")
    }

    return (
        <DndContext
            collisionDetection={rectIntersection}
            onDragEnd={(e) => {
                const container = e.over?.id;
                const title = e.active.data.current?.title || ''
                const date = e.active.data.current?.date || ''
                const index = e.active.data.current?.index || 0
                const parent = e.active.data.current?.parent || "Todo"

                if (container === "Todo") {
                    setTodoItems([...todoItems, {title, date}]);
                } else if (container === "Done") {
                    setDoneItems([...doneItems, {title, date}]);
                } else if (container === "Unassigned") {
                    setUItems([...uItems, {title, date}]);
                } else {
                    setInProgress([...inProgressItems, {title, date}]);
                }
                if (parent === "Todo") {
                    setTodoItems([
                        ...todoItems.slice(0, index),
                        ...todoItems.slice(index + 1),
                    ]);
                } else if (parent === "Done") {
                    setDoneItems([
                        ...doneItems.slice(0, index),
                        ...doneItems.slice(index + 1),
                    ]);
                } else if (parent === "Unassigned") {
                    setUItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
                } else {
                    setInProgress([
                        ...inProgressItems.slice(0, index),
                        ...inProgressItems.slice(index + 1),
                    ]);
                }
            }}
        >
            <Flex flexDirection="column">
                <AddCard addCard={addNewCard}/>
                <Flex flex="3">
                    {arrayLanes.map(({title, items, color}, index) => (
                        <KanbanLane
                            key={index}
                            title={title}
                            items={items}
                            color={color}
                            deleteItem={deleteCard}
                        />
                    ))}
                </Flex>
            </Flex>
        </DndContext>
    );
}