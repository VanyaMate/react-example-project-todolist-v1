import React from 'react';
import styled from 'styled-components';

export interface IVertical extends React.HTMLAttributes<HTMLDivElement> {
    offset?: number
}

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    & > * {
        margin-bottom: ${(props: { offset?: number }) => props.offset ? `${props.offset}px` : '10px'};
    }
    
    & > *:last-child {
        margin-bottom: 0;
    }
`

const Vertical: React.FC<IVertical> = (props) => {
    return (
        <VerticalContainer {...props}/>
    );
};

export default Vertical;