let counter = 0;

export const getCounter = () => counter;

export const incrementCounter = (amount) => {
    counter += amount;
};