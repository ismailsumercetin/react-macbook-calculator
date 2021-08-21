import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    font-size: 30px;
    color: white;
    & .key {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        border-right: none;
        border-bottom: none;
        width: 60px;
        height: 60px;

        &:last-child {
            background: orange;
        }

        &:first-child {
            border-left: none;
        }
    }

    & .key:active {
        background: #133030;
    }

    &:first-child {
        background: darkslategray;

        & .key {
            border-top: none;
        }
    }

    &:not(:first-child) {
        background: dimgray;
    }

    &:last-child {
        justify-content: flex-end;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        & .key {
            &:last-child {
                border-bottom-right-radius: 5px;
            }
        }
    }

    & #id_17 {
        border-bottom-left-radius: 5px;
        flex-grow: 2;
    }

    & .key[val="${props => props.currentOperator === '*' ? 'x' : props.currentOperator}"] {
        background: #133030;
    }
`;