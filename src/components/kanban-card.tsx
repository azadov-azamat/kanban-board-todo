import React from 'react';
import {useDraggable} from "@dnd-kit/core";
import {Flex, Text} from "@chakra-ui/react";
import {CSS} from "@dnd-kit/utilities";
import {MdDelete} from "react-icons/all";

interface KanbanCardProps {
    title: string;
    index: number;
    parent: string;
    date: string;
    deleteItem: any
}

export default function KanbanCard({title, parent, index, date, deleteItem}: KanbanCardProps) {

    // @ts-ignore
    const {attributes, listeners, setNodeRef, transform, transition} = useDraggable({
        id: `card-${title}`,
        data: {
            title,
            index,
            parent,
            date
        }
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <Flex
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            bg="white"
            p={2}
            mt={1}
            borderRadius="md"
            boxShadow="md"
            w="100%"
            h="auto"
            flexDirection={'column'}
            alignItems="start"
            justifyContent="center"
            cursor="grab"
        >
            <Flex fontWeight={600} fontSize={'18px'}>
                #{index + 1}
            </Flex>
            <Flex
                w={'100%'}
                h={'auto'}
                display={'flex'}
                alignItems="center"
                justifyContent="center"
            >
                <Text>{title}</Text>
            </Flex>
            <Flex
                w={'100%'}
                h={'auto'}
                display={'flex'}
                alignItems="center"
                mt={"9px"}
                pt={"9px"}
                borderTop={"1px solid black"}
                justifyContent={'space-between'}
            >
                <div className="">
                    {date}
                </div>
                <div className="">
                    <MdDelete className={"text-red-600 text-2xl cursor-pointer"} onClick={() => deleteItem(parent, title)}/>
                </div>
            </Flex>
        </Flex>
    );
}