import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },

  header: {
    paddingVertical: 48,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  headerSub: {
    marginTop: 6,
    color: '#333',
  },

  card: {
    backgroundColor: '#fff',
    margin: 24,
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#f3f4f6',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    fontSize: 16,
  },

  gradientButton: {
    borderRadius: 24,
    marginTop: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  link: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  back: {
    textAlign: 'center',
    color: '#777',
    marginBottom: 24,
  },
});
