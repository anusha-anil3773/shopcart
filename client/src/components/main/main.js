
import styled from "@emotion/styled";
import React from 'react'
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: brown;
`;

const Wrapper = styled.div`
  height: 100%;
`;


const Image = styled.img`
  height: 80%;
`;
function main() {
  return (
    <div>
      <Container>
      
   
      <Wrapper>
      
          <Image src="https://applemagazine.com/wp-content/uploads/2021/12/brandon-romanchuk-NOFyRmSQfUQ-unsplash-1024x683.jpg" />
         
     
      </Wrapper>
     
    </Container>
    </div>
  )
}

export default main


