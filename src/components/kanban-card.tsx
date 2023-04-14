import React from 'react';
import {useDraggable} from "@dnd-kit/core";
import {Flex, Text} from "@chakra-ui/react";
import {CSS} from "@dnd-kit/utilities";

interface KanbanCardProps {
    title: string;
    index: number;
    parent: string;
    date: string;
}

export default function KanbanCard({title, parent, index, date}: KanbanCardProps) {

    // @ts-ignore
    const {attributes, listeners, setNodeRef, transform, transition} = useDraggable({
        id: `card-${title}`,
        data: {
            title,
            index,
            parent
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
            h="100%"
            flexDirection={'column'}
            alignItems="start"
            justifyContent="center"
            cursor="grab"
        >
            <Flex fontWeight={600} fontSize={'18px'}>
                #{index + 1}
            </Flex>
            <Flex
                width={'100%'}
                height={'auto'}
                display={'flex'}
                alignItems="center"
                justifyContent="center"
            >
                <Text>{title}</Text>
            </Flex>
            <Flex
                width={'100%'}
                height={'auto'}
                display={'flex'}
                alignItems="center"
                justifyContent={'space-between'}
            >
                <div className="">
                    User Userov
                </div>
                <div className="">
                    {date}
                </div>
            </Flex>
        </Flex>
    );
}