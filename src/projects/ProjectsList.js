import React from 'react'
import ProjectSpace from './ProjectSpace'

function ProjectsList() {
    return (
        <div>
            <ProjectSpace 
            name="Chirag"
            address="Jain"
            image="washkaro-logo.png"/>
            <ProjectSpace />
            <ProjectSpace />
            <ProjectSpace />
            <ProjectSpace />
        </div>
    )
}

export default ProjectsList