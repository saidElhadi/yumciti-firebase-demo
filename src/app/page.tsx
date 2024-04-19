"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import styled from "styled-components";

import { Card, CardContent, Typography } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const TestComponent = styled.div`
  width: 200px;
  height: 200px;
  background-color: blue;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: red;
  margin-bottom: 2rem;
`;

const StyledTitle = styled(Title)`
  font-size: 4rem;
`

const StyledButoon = styled(Button)`
  &&{
    background-color: green;
  }
`

const StyledCard = styled(Card)<{ propColor?: string }>`
  && {
    width: 300px;
    margin-bottom: 2rem;
    background-color: ${(props) => props.propColor || "#ff0000"};
  }
`;
const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  padding: 1rem;

  &:hover {
    color: blue;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default function Home() {
  return (
    <Container>
      <Title className="text-4xl text-blue-500">Dashboard</Title>
      <StyledTitle>Second header </StyledTitle>
      <StyledButoon variant="contained">testccccccccccccccccccccccccccc</StyledButoon>

      
      <StyledCard propColor="">
        <CardContent>
          <Typography variant="h5" component="div">
            Hello, User!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome to your dashboard. You have 5 new notifications.
          </Typography>
        </CardContent>
      </StyledCard>



      <Button variant="contained" color="primary" className="w-[700px] h-[200px]">
        Material UI Button
      </Button>

      <div className="bg-red-300 w-[300px] flex flex-col justify-center">
        <div className="w-[50px] bg-orange-700">test</div>
        <div className="w-[50px]">test</div>
        <div className="w-[50px]">test</div>
        <div className="w-[50px]">test</div>
        <div className="w-[50px]">test</div>
        <div className="w-[50px]">test</div>
        
      </div>

      <StyledLink href="https://nextjs.org" target="_blank">
        Learn Next.js
      </StyledLink>
    </Container>
  );
}
