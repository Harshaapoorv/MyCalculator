import { useState } from 'react';

export default function useCalculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [isWaitingForSecondOperand, setIsWaitingForSecondOperand] =
    useState(false);

  const handleDigit = ({ value }) => {
    if (!isWaitingForSecondOperand) {
      if (displayValue === '0' && value !== '.') {
        setDisplayValue(value);
      } else {
        if (value === '.' && displayValue.includes('.')) {
          return;
        }
        setDisplayValue(prev => prev + value);
      }
    } else if (isWaitingForSecondOperand) {
      if (value === '.') {
        value = '0.';
      }
      setDisplayValue(value);
      setIsWaitingForSecondOperand(false);
    }
  };

  const handleOperator = ({ operatorValue }) => {
    if (operator === null && isWaitingForSecondOperand === false) {
      setOperator(operatorValue);
      setFirstOperand(displayValue);
      setIsWaitingForSecondOperand(true);
    } else if (operator && !isWaitingForSecondOperand) {
      let result = null;
      if (operator === '+') {
        result = parseFloat(firstOperand) + parseFloat(displayValue);
        setDisplayValue(String(result));
      } else if (operator === '-') {
        result = parseFloat(firstOperand) - parseFloat(displayValue);
        setDisplayValue(String(result));
      } else if (operator === 'x') {
        result = parseFloat(firstOperand) * parseFloat(displayValue);
        setDisplayValue(String(result));
      } else if (operator === '÷') {
        result = parseFloat(firstOperand) / parseFloat(displayValue);
        if (isNaN(result) || !isFinite(result)) {
          result = 'Error';
        }
        setDisplayValue(String(result));
      } else if (operator === '=') {
        setDisplayValue(displayValue);
        result = parseFloat(displayValue);
      }
      setFirstOperand(result);
      setOperator(operatorValue === '=' ? null : operatorValue);
      if (operatorValue !== '=') setIsWaitingForSecondOperand(true);
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setIsWaitingForSecondOperand(false);
  };

  return {
    displayValue,
    handleDigit,
    handleOperator,
    handleClear,
  };
}
