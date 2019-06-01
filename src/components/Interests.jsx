import React from 'react'
import { Button } from 'semantic-ui-react';


const Interests = ({interests}) => {
  return (
    <div id="interests">
      <h1 style={{ marginTop: '2%' }} className="section_header">Interests:</h1>
      <div className="interests">
        {interests.map(i => (
          <Button className="non-click" inverted size="medium" key={i} color="red">
            {i}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Interests;