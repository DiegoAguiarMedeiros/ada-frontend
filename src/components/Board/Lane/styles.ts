import styled from "styled-components";

export const Lane = styled.div<{
    background: string;
  }>`
    background: ${(props: { background: string }) => props.background};
    flex: 1;
    margin: 0 10px;
    height:90vh;  
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0 15px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 1px;
    }
`;

export const LaneTitle = styled.h4<{
    color: string;
  }>`
    display: flex;
    justify-content:space-around;
    color: ${(props: { color: string }) => props.color};
`;
