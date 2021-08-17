import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  flex: 1;

  margin-top: 7.5rem;
  @media(max-width: 800px) {
    height: 90vh;
    margin-top: 0rem;
    flex-direction: column;
    flex: 1;
    
    align-items: center;
    
  }
  
`;