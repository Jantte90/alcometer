import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepperNumber: {
    fontSize: 16,
    paddingHorizontal: 10,
    color: 'white',
  },
  themeSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  themeLabel: {
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
  calculateButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  resultValue: {
    fontSize: 20,
  },
});

export default styles;
