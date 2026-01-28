import { useState } from 'react';
import Decimal from 'decimal.js';

export default function useCalculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [isWaitingForSecondOperand, setIsWaitingForSecondOperand] =
    useState(false);
  const [justEvaluated, setJustEvaluated] = useState(false);

  const handleDigit = ({ value }) => {
    if (!isWaitingForSecondOperand) {
      if (displayValue === 'Error') {
        setDisplayValue(value);
        setFirstOperand(null);
        setOperator(null);
        setIsWaitingForSecondOperand(false);
        return;
      }
      if (justEvaluated) {
        setDisplayValue(value === '.' ? '0.' : value);
        setJustEvaluated(false);
        setOperator(null);
        setFirstOperand(null);
        setIsWaitingForSecondOperand(false);
        return;
      }
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
    if (operatorValue === '=') {
      setJustEvaluated(true);
    }
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
        result = Decimal.div(firstOperand, displayValue).toFixed(2).toString();
        if (result === 'NaN' || result === 'Infinity') {
          result = 'Error';
        }
        setDisplayValue(String(result));
        // Removed to use Decimal.js for accurate division}
        // result = parseFloat(firstOperand) / parseFloat(displayValue);
        // if (isNaN(result) || !isFinite(result)) {
        //   result = 'Error';
        // }
        // setDisplayValue(String(result));
      } else if (operator === '=') {
        setDisplayValue(displayValue);
        result = parseFloat(displayValue);
      } else {
        setOperator(operatorValue);
      }
      setFirstOperand(result);
      setOperator(operatorValue === '=' ? null : operatorValue);
      if (operatorValue !== '=') setIsWaitingForSecondOperand(true);
    } else if (operator && isWaitingForSecondOperand) {
      setOperator(operatorValue);
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setIsWaitingForSecondOperand(false);
  };

  const handleBackspace = () => {
    if (isWaitingForSecondOperand) return;
    if (displayValue === 'Error') return;

    if (displayValue.length === 1) {
      setDisplayValue('0');
    } else {
      setDisplayValue(prev => prev.slice(0, -1));
    }
  };

  return {
    displayValue,
    handleDigit,
    handleOperator,
    handleClear,
    handleBackspace,
  };
}
