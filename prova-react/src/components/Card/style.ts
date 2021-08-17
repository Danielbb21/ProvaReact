import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  flex: 1;

  margin-top: 15.4rem;
  @media(max-width: 1100px) {
    margin-top: 0rem;
    flex-direction: column;
    flex: 1;
    
    align-items: center;
    
  }
  
`;