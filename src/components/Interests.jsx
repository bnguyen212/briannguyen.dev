import React from 'react';
import '../css/Interests.css';
import { Button } from 'semantic-ui-react';

const Interests = () => {

  const interests = ['Product Development', 'UI/UX Design', 'Data Science', 'Education', ' Social Impact', 'Foreign Languages', 'Photography', 'Fashion', 'Real Estate', 'Health Tech']

  return (
    <div className="interests">
      <h1 className="section_header">Interests:</h1>
      <div className="interests-container">
        {interests.map(i => (
          <Button className="interest-item non-click" inverted size="medium" key={i} color="red">
            {i}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Interests;