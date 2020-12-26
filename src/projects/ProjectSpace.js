import React from 'react'
// import logo from './images/washkaro-logo.png'

function ProjectSpace(props) {
    const {name, image, address} = props
    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello"/>
            <h1>{name}</h1>
            <div>{address}</div>
        </div>
    )
}

export default ProjectSpace