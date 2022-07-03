import styled from "styled-components";

interface IButton {
    isActive : boolean
}

export const SLanguageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 2px 0;
`

export const SButtonLang = styled.button<IButton>`
    background-color: ${({isActive}) => ( isActive ? '#17589f' : 'white')};
    padding: 4px 2px;
    margin-right: 10px;
    color: ${({isActive}) => ( isActive ? 'white' : '')};
`
/*$

*/