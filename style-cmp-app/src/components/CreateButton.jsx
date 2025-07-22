import styled from "styled-components";

//각각 import  가능하게 구성
export const SimpleButton = styled.button`
    color:white;
    background-color:purple;
`;

// SimpleButton 상속받아서 SimpleButton CSS 적용(button 객체도 포함해서 상속)
export const LargeButton = styled(SimpleButton)` 
    font-size:50px;
`;