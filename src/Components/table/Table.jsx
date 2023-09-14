import React, { useEffect, useState } from "react";
import './table.css';




export const Table = ({ setSpent, selectedCurrency, data}) => {
    const [state, setState] = useState({
        counter:  0,
        counter2: 0,
        counter3: 0,
        counter4: 0,
        counter5: 0,
    });
   

    const { counter, counter3, counter2, counter4, counter5 } = state;
    
    // objeto que mapea monedas a sus iconos correspondientes
    const currencyIcons = {
        Dollar: "fa-dollar-sign",
        Pound: "fa-sterling-sign",
        Euro: "fa-euro-sign",
        Ruppee: "fa-indian-rupee-sign",
    };
    
    const getCurrencyIcon = () => {
        return currencyIcons[selectedCurrency];
    };
    
    //handle de suma//
    const handleCounterClick = (counterName) => {
        // Encuentra el valor actual del contador
        const currentCounterValue = state[counterName];

        // Incrementa el contador correspondiente
        setState((prevState) => ({
            ...prevState,
            [counterName]: currentCounterValue + 10,
        }));

        // Actualiza el estado "spent" en el componente Budget
        setSpent((prevSpent) => prevSpent + 10);
    };

    //hanlde de resta//
    const handleCounterClickMinus = (counterName) => {
        // Encuentra el valor actual del contador
        const currentCounterValue = state[counterName];

        //fijarse si el contador es mayor a 0//
        if (currentCounterValue > 0) {

            // Decrementa el contador correspondiente
            setState((prevState) => ({
                ...prevState,
                [counterName]: currentCounterValue - 10,
            }));

            // Actualiza el estado "spent" en el componente Budget
            setSpent((prevSpent) => prevSpent - 10);
        }
    };

    //handles de mis elementos agregados//

   
   

    
    
    
    useEffect(() => {
        // Inicializa spent en 0 solo al montar el componente
        setSpent(0);
    }, []);
  
    
  return (
      <div className="tableContainer m-5">
          <h3>Allocation</h3>
          <table className="table">
              <thead>
                  <tr>
                      <th scope="col">Deparment</th>
                      <th scope="col">Allocated Budget</th>
                      <th scope="col">Increase by 10</th>
                      <th scope="col">Decrease By 10</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td scope="row">Marketing</td>
                      <td> <i className={`fa-solid ${getCurrencyIcon()}`}> </i> 
                           {counter}</td>
                      <td >
                          <button className="btnn-mas"
                              type="button"
                              onClick={() => handleCounterClick('counter')}
                             >+</button>
                      </td>
                      <td >
                          <button className="btnn-menos" type="button"
                              onClick={() => handleCounterClickMinus('counter')}>
                              -</button>
                      </td>
                  </tr>
                  <tr>
                      <td scope="row">Finance</td>
                      <td> <i className={`fa-solid ${getCurrencyIcon()}`}> </i>{counter2}</td>
                      <td >
                          <button className="btnn-mas"
                              type="button"
                              onClick={() => handleCounterClick('counter2')}
                          >+</button>
                      </td>
                      <td >
                          <button className="btnn-menos" type="button"
                              onClick={() => handleCounterClickMinus('counter2')}>
                              -</button>
                      </td>
                  </tr>
                  <tr>
                      <td scope="row">Sales</td>
                      <td> <i className={`fa-solid ${getCurrencyIcon()}`}> </i>{counter3}</td>
                      <td > 
                          <button className="btnn-mas"
                              type="button"
                              onClick={() => handleCounterClick('counter3')}
                          >+</button>
                      </td>
                      <td >
                          <button className="btnn-menos" type="button"
                              onClick={() => handleCounterClickMinus('counter3')}>
                              -</button>
                      </td>
                  </tr>
                  <tr>
                      <td scope="row">Human Resource</td>
                      <td> <i className={`fa-solid ${getCurrencyIcon()}`}> </i>{counter4}</td>
                      <td >
                          <button className="btnn-mas"
                              type="button"
                              onClick={() => handleCounterClick('counter4')}
                          >+</button>
                      </td>
                      <td >
                          <button className="btnn-menos" type="button"
                              onClick={() => handleCounterClickMinus('counter4')}>
                              -</button>
                      </td>
                  </tr>
                  <tr>
                      <td scope="row">IT</td>
                      <td> <i className={`fa-solid ${getCurrencyIcon()}`}> </i>{counter5}</td>
                      <td >
                          <button className="btnn-mas"
                              type="button"
                              onClick={() => handleCounterClick('counter5')}
                          >+</button>
                      </td>
                      <td >
                          <button className="btnn-menos" type="button"
                              onClick={() => handleCounterClickMinus('counter5')}>
                             -</button>
                      </td>
                  </tr>
                  {data.map((item, index) => (
                  <tr key={index}>
                          <td>{item.allocation}</td>
                          <td><i className={`fa-solid ${getCurrencyIcon()}`} />{item.number}</td>
                          <td>
                              <button className="btnn-mas" type="button"
                                 >
                                  +</button>
                          </td>
                          <td>
                              <button className="btnn-menos" type="button"
                                 >
                                  -</button>
                          </td>
                  </tr>
                  ))}
                  
              </tbody>
          </table>
    </div>
  )
}
