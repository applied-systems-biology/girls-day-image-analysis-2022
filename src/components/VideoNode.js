import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import {Card} from "react-bootstrap";

export default memo(({ data, isConnectable }) => {
    return (
        <>
            <Handle
                type="target"
                position="left"
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <Card>
                <Card.Header>
                    {data.label}
                </Card.Header>
                <Card.Body>
                    <video src={data.video} autoPlay={true} loop={true} width={200} height={200} controls={false} muted={true}/>
                </Card.Body>
            </Card>
            <Handle
                type="source"
                position="right"
                id="a"
                style={{ background: '#555' }}
                isConnectable={isConnectable}
            />
        </>
    );
});
