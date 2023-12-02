import React from 'react'
import HomeInfo from '../HomeInfo'
import ProjectView from '../ProjectView'

function Projects() {
  return (
    <>
      <div className="main-container">
        <div className="flex-container w-full">
          {/* first row */}
          <HomeInfo />

          {/* second row */}
          <div className="big-container">
            <div className="content-wrapper">
              <ProjectView />
            
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects