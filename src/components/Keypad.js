import { View, StyleSheet } from 'react-native';
import { useTheme } from '../store/theme.context';
import Button from './Button';

const Keypad = ({ onDigit, onOperator, onClear }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          label="AC"
          onPress={() => onClear()}
          type={'operand'}
          span={3}
        />
        <Button
          label="÷"
          onPress={() => onOperator({ operatorValue: '÷' })}
          type={'operator'}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          label="7"
          onPress={() => onDigit({ value: '7' })}
          type={'operand'}
        />
        <Button
          label="8"
          onPress={() => onDigit({ value: '8' })}
          type={'operand'}
        />
        <Button
          label="9"
          onPress={() => onDigit({ value: '9' })}
          type={'operand'}
        />
        <Button
          label="x"
          onPress={() => onOperator({ operatorValue: 'x' })}
          type={'operator'}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          label="4"
          onPress={() => onDigit({ value: '4' })}
          type={'operand'}
        />
        <Button
          label="5"
          onPress={() => onDigit({ value: '5' })}
          type={'operand'}
        />
        <Button
          label="6"
          onPress={() => onDigit({ value: '6' })}
          type={'operand'}
        />
        <Button
          label="-"
          onPress={() => onOperator({ operatorValue: '-' })}
          type={'operator'}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          label="1"
          onPress={() => onDigit({ value: '1' })}
          type={'operand'}
        />
        <Button
          label="2"
          onPress={() => onDigit({ value: '2' })}
          type={'operand'}
        />
        <Button
          label="3"
          onPress={() => onDigit({ value: '3' })}
          type={'operand'}
        />
        <Button
          label="+"
          onPress={() => onOperator({ operatorValue: '+' })}
          type={'operator'}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          label="."
          onPress={() => onDigit({ value: '.' })}
          type={'operand'}
        />
        <Button
          label="0"
          onPress={() => onDigit({ value: '0' })}
          type={'operand'}
        />
        <Button label="<-" onPress={() => {}} type={'operand'} />
        <Button
          label="="
          onPress={() => onOperator({ operatorValue: '=' })}
          type={'specialOperator'}
        />
      </View>
    </View>
  );
};

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      backgroundColor: theme.colors.keypad_background,
    },
    keypadText: {
      fontSize: 24,
      color: theme.colors.primary_display_text,
    },
  });

export default Keypad;
