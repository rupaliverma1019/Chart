import React from 'react';
import './Card.css'
const Card = () => {
  const cardStyle = {
    width: '10rem',
  };

  return (
    <div className='cards'>
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">Total Account Receivable</h5>
          <p className="card-text text-primary">
            $67000
          </p>
          
        </div>
      </div>
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">Total Account Payable</h5>
          <p className="card-text text-danger">
            $20000
          </p>
          
        </div>
      </div>

      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">Equity Ratio</h5>
          <p className="card-text text-primary">
            75.38%
          </p>
          
        </div>
      </div>

      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">Debt Equity</h5>
          <p className="card-text text-info">
            1.10%
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
