import { useState } from 'react';
import './footer.css';

export const Footer = ({ selectedCurrency, onAddTableItem, estadisticsValue, remaining }) => {
    
    const [footerValue, setFooterValue] = useState(0);

    //campo numerico//
    const [number, setNumber] = useState(0);

    const handleSelectedNumber = (event) => {
        setNumber(event.target.value);
    };
   //campo de cambio//
    const [changeCamp, setChangecamp] = useState('');
    const handleChangeCamp = (event) => {
        setChangecamp(event.target.value);
    }

    //campo de seleccion//
    const [selectedValue, setSelectedValue] = useState('')

    const handleSelectedValue = (event) => {
        setSelectedValue(event.target.value);
    };

    //
    const handleFooterChange = (event) => {
        const newValue = event.target.value !== '' ? event.target.valueAsNumber : 0;
        if (newValue <= estadisticsValue) {
            setFooterValue(newValue);
        } else {
            alert('This amount cannot be higher than the remaining value');
        }
    };
    
    //

    const handleSaveClick = () => {
        if (selectedValue) {
            
            const newItem = {
                allocation: selectedValue,
                number: number,
                changeCamp:changeCamp,
            };
            onAddTableItem(newItem);
            setSelectedValue('');
            setNumber(0);
            setChangecamp('')
        }
    };
   

    const currencyIcons = {
        Dollar: "fa-dollar-sign",
        Pound: "fa-sterling-sign",
        Euro: "fa-euro-sign",
        Ruppee: "fa-indian-rupee-sign",
    }

    const getCurrencyIcon = () => {
       return currencyIcons[selectedCurrency];
    }


  return (
      <div className='m-5'>
          <h3>Change allocation</h3>
          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                      <div className="input-group m-3 element">
                          <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                          <select className="form-select" id="inputGroupSelect01"
                              value={changeCamp}
                              onChange={handleChangeCamp}>
                              <option value="">Choose...</option>
                              <option value="Marketing">Marketing</option>
                              <option value="Finance">Finance</option>
                              <option value="Sales">Sales</option>
                              <option value="Human Resource">Human Resource</option>
                              <option value="IT">IT</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="input-group m-3 element">
                          <label className="input-group-text" htmlFor="inputGroupSelect01">Allocation</label>
                          <select className="form-select" id="inputGroupSelect01"
                              value={selectedValue}
                          onChange={handleSelectedValue}>
                              <option value="">Add</option>
                              <option value="Publicity">Publicity</option>
                              <option value="Logistic and operation">Logistic and operation</option>
                              <option value="Management committee">Management committee</option>
                          </select>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="input-group m-3">
                          <div className="input-group-prepend">
                              <i className={`fa-solid ${getCurrencyIcon()}`} style={{ marginRight: '8px', alignSelf: 'center', paddingTop: '11px' }}></i>
                          </div>
                          <input
                              type="number"
                              className="form-control"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              max={remaining}
                              step={10}
                              value={footerValue}
                              onChange={handleFooterChange}
                          />
                      </div>
                  </div>
                  <div className="col-md-3">
                      <button
                          type="button"
                          className="btn btn-primary boton m-3 px-md-4"
                          onClick={handleSaveClick}
                      >
                          Save
                      </button>
                  </div>
              </div>
          </div>

    </div>
  )
}
