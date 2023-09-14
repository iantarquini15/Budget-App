import { useState } from 'react';
import './estadistics.css';


export const Estadistics = ({spentValue,selectedCurrency,handleCurrency}) => {
    // numeros //

    const [budget, setBudget] = useState(0);
    const remaining = budget - spentValue;
   
    // type of change //

    
    
    //handles//

    const handleBudgetChange = (event) => {
        let newBudget = event.target.value;
        if (newBudget > 20000) {
            newBudget = 20000
        }
        setBudget(newBudget);
    };

    //

    const handleSpentChange = (event) => {
        const newSpent = event.target.value;
        if (newSpent > budget) {
            alert('the spent can not be more than he budget')
        } else {
            setSpent(newSpent);
            
        }
    };
    //
    
    

  return (
      <div className=' mt-5 container'>
          <div className="input-group flex-nowrap me-4 budget-container">
              <span className="input-group-text" id="addon-wrapping">Budget :</span>
              <div className="input-with-currency budget-container">
                  <input
                      type='number'
                      value={budget}
                      onChange={handleBudgetChange}
                      min={0}
                      max={20000}
                      step={10}
                      maxLength={5}
                      className="form-control"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                  />
                  <span className="currency-icon">
                      <i className={`fa-solid fa-${selectedCurrency === 'Dollar' ? 'dollar-sign' : ''}${selectedCurrency === 'Pound' ? 'sterling-sign' : ''}${selectedCurrency === 'Euro' ? 'euro-sign' : ''}${selectedCurrency === 'Ruppee' ? 'indian-rupee-sign' : ''}`}></i>
                  </span>
              </div>
         

        
              <span className="input-group-text" id="addon-wrapping">Remaining :</span>
              <div className="input-with-currency remaining-container">
                  <input
                      type='number'
                      value={remaining}
                      min={0}
                      readOnly
                      className="form-control"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                  />
                  <span className="currency-icon">
                      <i className={`fa-solid fa-${selectedCurrency === 'Dollar' ? 'dollar-sign' : ''}${selectedCurrency === 'Pound' ? 'sterling-sign' : ''}${selectedCurrency === 'Euro' ? 'euro-sign' : ''}${selectedCurrency === 'Ruppee' ? 'indian-rupee-sign' : ''}`}></i>
                  </span>
              </div>
          
         
              <span className="input-group-text" id="addon-wrapping">Spent so far  :</span>
              <div className="input-with-currency spent-container">
                  <input
                      type='number'
                      value={spentValue}
                      onChange={handleSpentChange}
                      min={0}
                      step={10}
                      readOnly
                      className="form-control"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                  />
                  <span className="currency-icon">
                      <i className={`fa-solid fa-${selectedCurrency === 'Dollar' ? 'dollar-sign' : ''}${selectedCurrency === 'Pound' ? 'sterling-sign' : ''}${selectedCurrency === 'Euro' ? 'euro-sign' : ''}${selectedCurrency === 'Ruppee' ? 'indian-rupee-sign' : ''}`}></i>
                  </span>
              </div>
          </div>


          <div className="nav-item dropdown">
              <button className="btn btn-secondary dropdown-toggle currency-dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Currency
              </button>
              <ul className="dropdown-menu">
                  <li
                      className="dropdown-item animate__animated animate__fadeInDown"
                      onClick={() => handleCurrency('Dollar')}>
                      <i className="fa-solid fa-dollar-sign"></i> Dollar
                  </li>
                  <li
                      className="dropdown-item animate__animated animate__fadeInDown"
                      onClick={() => handleCurrency('Pound')}>
                      <i className="fa-solid fa-sterling-sign"></i> Pound
                  </li>
                  <li
                      className="dropdown-item animate__animated animate__fadeInDown"
                      onClick={() => handleCurrency('Euro')}>
                      <i className="fa-solid fa-euro-sign"></i> Euro
                  </li>
                  <li
                      className="dropdown-item animate__animated animate__fadeInDown"
                      onClick={() => handleCurrency('Ruppee')}>
                      <i className="fa-solid fa-indian-rupee-sign"></i> Ruppee
                  </li>
              </ul>
          </div>
          
         
      </div>
      
  )
}
