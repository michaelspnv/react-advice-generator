import React, { useState, useEffect } from "react"
import styled from "styled-components"
import devices from '../devices'
import Dice from "../svg/dice.svg"

const CardBody = styled.div`
  position: relative;
  width: 250px;
  height: 330px;
  background-color: var(--card-color);
  border-radius: 20px;
  padding: 30px 20px;
  box-shadow: 2px 2px 20px hsl(218, 23%, 15%),
              2px -2px 20px hsl(218, 23%, 15%),
             -2px 2px 20px hsl(218, 23%, 15%),
             -2px -2px 20px hsl(218, 23%, 15%);

  @media (${devices.desktop}) {
    width: 600px;
    height: 370px;
    padding: 50px;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 8px;
  color: var(--neon-green);

  @media (${devices.desktop}) {
    font-size: 12px;
  }
`

const Quote = styled.div`
  font-size: var(--fs-quote);
  color: var(--light-cyan);
  padding: 28px 0;

  @media (${devices.desktop}) {
    font-size: var(--fs-quote-desktop)
  }
`

const Separator = styled.div`
  width: 210px;
  position: absolute;
  bottom: 75px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${devices.desktop}) {
    width: 500px;
  }
`

const Line = styled.span`
  width: 40%;
  height: 1px;
  background-color: var(--blue);

  @media (${devices.desktop}) {
    width: 45%;
  }
`

const VerticalLines = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18px;
  height: 25px;

  @media (${devices.desktop}) {
    width: 25px;
  }
`

const VerticalLine = styled.span`
  width: 6px;
  height: 16px;
  border-radius: 10px;
  background-color: var(--light-cyan);

  @media (${devices.desktop}) {
    width: 8px;
    height: 18px;
  }
`

const RandomizingButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 50px;
  height: 50px;
  background-color: var(--neon-green);
  border-radius: 50%;
  cursor: pointer;  

  @media (${devices.desktop}) {
    width: 65px;
    height: 65px;

    &:hover {
      box-shadow: 1px 1px 25px var(--neon-green-shadow),
                  1px -1px 25px var(--neon-green-shadow),
                 -1px 1px 25px var(--neon-green-shadow),
                 -1px -1px 25px var(--neon-green-shadow);
    }
  }
`

const DiceImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;

  @media (${devices.desktop}) {
    width: 24px;
  }
`

function Card() {
  const [loading, setLoading] = useState(false)
  const [adviceNum, setAdviceNum] = useState()
  const [advice, setAdvice] = useState()

  const loadAdviceNum = (isLoading) => isLoading ? "..." : adviceNum
  const loadAdvice = (isLoading) => isLoading ? <p>Loading...</p> : <p>&#10077;&nbsp;{advice}&nbsp;&#10078;</p>

  const handleClick = () => {
    if (loading) return
    setLoading(true)
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setAdvice(data.slip.advice)
          setAdviceNum(data.slip.id)
          setLoading(false)
        }, 1000)        
      })
  }

  useEffect(() => handleClick(), [])

  return (
    <CardBody>
      <Title>Advice #{ loadAdviceNum(loading) }</Title>
      <Quote>{ loadAdvice(loading) }</Quote>
      <Separator>
        <Line />
        <VerticalLines>
          <VerticalLine />
          <VerticalLine />
        </VerticalLines>
        <Line />
      </Separator>
      <RandomizingButton onClick={handleClick}>
        <DiceImg src={Dice} alt="dice" />
      </RandomizingButton>
    </CardBody>
  )
}

export default Card
