import React from 'react';
import styled from 'styled-components';
import svg7 from './svg7.svg';

const Photo = () => {
    return (
        <div>
           <Hover src={svg7} alt='my' />
        </div>
    )
}

export default Photo;

const Hover = styled.img`
    max-width: 100%;
    height: 100%;
`
