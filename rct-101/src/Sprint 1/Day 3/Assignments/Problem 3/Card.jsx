import React from 'react'
import { AmazonCard } from './AmazonCard'
import { AmazonGift } from './AmazonGift'
import { AppleCard } from './AppleCard'

export const Card= () => {
  return (
    <>
    <AmazonCard logo={"/Amazon.jpg"} date={"28/10/2022"} heading={"Amazon Gift"} subHeading={"Pay"} color={"orange"} device={"Desktop"} />
    <AmazonGift logo={"/Amazon.jpg"} date={"02/01/2022"} heading={"Amazon Card"} subHeading={"Payment"} color={"orange"} device={"Desktop"} />
    <AppleCard logo={"/Apple_logo.png"} date={"17 Sep 2020"} heading={"Apple Gift"} subHeading={"Payment"} color={"whitesmoke"} device={"MacOS"} />
    <br/>
    <br/>
    </>
  )
}
