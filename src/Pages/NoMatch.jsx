import React from "react";
import { useNavigate } from 'react-router-dom';

function NoMatch() {

  const navigate = useNavigate()

  return <div className="noMatchWrap">
    <h2>Page Not Found</h2>
    <div className="btnNoMatch">
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  </div>;
}

export default NoMatch;
