import styled from "styled-components";

export const PrimaryButton = styled.button`
    color: ${
        props => props.primary ? 'white' : 'black'
    };
    background-color: ${
        props => props.primary ? 'red' : 'gray'
    };
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
`;
