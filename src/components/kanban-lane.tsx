import React from 'react';
import {arrayDataProps, arrayLanesProps} from "../interface/data.interface";
import {useDroppable} from "@dnd-kit/core";
import {Flex, Text} from "@chakra-ui/react";
import KanbanCard from "./kanban-card";

export default function KanbanLane({title, items, color}: arrayLanesProps) {

    const {setNodeRef} = useDroppable({
        id: title,
    });

    const countItems = items?.length || 0;

    return (
        <Flex flex="3" padding="5" flexDirection="column" minH="10rem" height={
            countItems > 0 ? "auto" : "10rem"
        }>
            <Text fontSize="xl" borderRadius="md" p={1} fontWeight="bold" bg={`${color}.500`} mb="2" color={
                "white"
            }>
                {title}
            </Text>
            <Flex
                ref={setNodeRef}
                flex="1"
                bg={`${color}.100`}
                borderRadius="md"
                boxShadow="md"
                flexDirection="column"
                p={2}

            >
                {items.map(({title: item, date}: arrayDataProps, index: number) => (

                    <KanbanCard title={item} date={date} index={index} parent={title}/>
                ))}


            </Flex>
        </Flex>
    );
}