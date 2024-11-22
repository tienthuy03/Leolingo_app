import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  animation: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 20,
  },
  btnStarted: {
    width: '80%',
    backgroundColor: '#FF8000',
    margin: 20,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtStarted: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  }
});