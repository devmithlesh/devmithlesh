import React from "react";
import { useNavigate } from 'react-router-dom';

function Nomatch() {

  const navigate = useNavigate()

  return <div className="NoMatchWrap">
    <h2>Page Not Found</h2>
    <div className="btnNomatch">
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  </div>;
}

export default Nomatch;
