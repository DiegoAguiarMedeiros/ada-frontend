import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width:100%;
    background-color: #fff;
    border-radius: 5px;
    margin: 10px 0;
    border: 1px solid rgba(0,0,0,0.1) ;
    `;
export const CardHead = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,0.1) ;
`;
export const CardHeadTitle = styled.div`
  text-align: center;
  flex: 10;
`;
export const CardHeadIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const CardBody = styled.div`
  padding: 5px;
  display: flex;
  text-align: justify;
`;
export const CardFooter = styled.div`

  border-top: 1px solid rgba(0,0,0,0.1) ;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LaneTitle = styled.h4<{
    color: string;
  }>`
    color: ${(props: { color: string }) => props.color};
`;
