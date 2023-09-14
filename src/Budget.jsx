import React,{ useState } from "react";
import { Estadistics, Footer, Table } from "./Components";

export const Budget = () => {
    const [remaining, setRemaining] = useState(0);
    const [estadisticsValue, setEstadisticsValue] = useState(1300);
    //
    const handleEstadisticsChange = (newValue) => {
        setEstadisticsValue(newValue);
    };
    //

    const [tableData, setTableData] = useState([]);

    const [selectedCurrency, setSelectedCurrency] = useState("Dollar");

    const [spent, setSpent] = useState(0);

    const handleCurrency = (currency) => {
        setSelectedCurrency(currency);
    };
    // Función para agregar un nuevo elemento a la tabla
    const addTableItem = (newItem) => {
        setTableData([...tableData, newItem]);
    };


    return (
        <>
            <h1>Company's Budget Allocation</h1>
            <Estadistics
                spentValue={spent}
                selectedCurrency={selectedCurrency}
                handleCurrency={handleCurrency}
                value={estadisticsValue}
                onChange={handleEstadisticsChange}
            />
            <Table
                spent={spent}
                setSpent={setSpent}
                selectedCurrency={selectedCurrency}
                data={tableData}

                onAddTableItem={addTableItem}
            />
            <Footer
                selectedCurrency={selectedCurrency}
                onAddTableItem={addTableItem}
                estadisticsValue={estadisticsValue}
                remaining={remaining}
            />
        </>
    );
};