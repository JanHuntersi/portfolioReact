import React from "react";
import '../App.css'
import styled from 'styled-components';

const Wrapper=styled.div`
height:100%;
width:100%;
background-color:green;
`

export default function Home(){
    return(
        <div className="pages">
            <Wrapper >
            <p>Dobrodosli na Home Page!</p>
            </Wrapper>
           
            <p>Dobrodosli na Home Page!</p>

        </div>
    );
}