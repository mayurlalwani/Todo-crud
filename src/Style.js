import styled from 'styled-components';

export const Container = styled.div`
    max-width:1000px;
    padding: 0 1rem;
    margin-left: auto;
    margin-right:auto;`;
    

export const Header = styled.h1`
    
    `;

export const Form = styled.div`
    display:flex;
    flex-direction:column;
    padding:2rem 0;
    justify-content:space-between`;

export const Input = styled.input`
    width:28rem;
    line-height:2.15;
    font-size:0.9rem;
    `;

export const Button = styled.button`
    display: inline-block;
    border: 1px solid #0366EE;
    border-radius: 4px;
    background: #0366EE;
    color: #ffffff;
    font-weight: 600;
    font-size: 1rem;
    padding: .1.5rem 1.25rem;
    margin: 1.5rem 1rem .5rem 1rem;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    line-height: 2.5;
    width:6rem;
    `;

export const ViewTasks = styled.div`
    margin-top:5rem;
    width:30rem`