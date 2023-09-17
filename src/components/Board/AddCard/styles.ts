import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width:500px;
    background-color: #fff;
    border-radius: 5px;
    `;
export const CardHead = styled.div`
    display: flex;
    margin: 5px;
`;
export const CardHeadTitle = styled.div`
width: 100%;
  text-align: center;
`;
export const CardHeadIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const CardBody = styled.div`
  height: 200px;
  margin: 5px;
  display: flex;
  text-align: justify;

  .markdown-container {
    width: 100%; /* Set the desired width for the Markdown content */
    /* Add other styling as needed */
  }
`;
export const CardFooter = styled.div`
 padding: 10px;
  border-top: 1px solid rgba(0,0,0,0.1) ;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const LaneTitle = styled.h4<{
    color: string;
  }>`
    color: ${(props: { color: string }) => props.color};
`;