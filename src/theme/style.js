import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from './color';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  area: {
    flex: 1,
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: Colors.active,
    fontFamily: 'Poppins-Bold',
  },
  title1: {
    fontSize: 28,
    color: Colors.active,
    fontFamily: 'Poppins-Bold',
  },
  apptitle: {
    fontSize: 24,
    color: Colors.active,
    fontFamily: 'Poppins-SemiBold',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.active,
  },
  r12: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.active,
  },
  b12: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: Colors.active,
  },
  m12: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Colors.active,
  },
  s12: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.active,
  },
  r14: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.active,
  },
  b14: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: Colors.active,
  },
  m14: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: Colors.active,
  },
  s14: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.active,
  },
  r16: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: Colors.active,
  },
  b16: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: Colors.active,
  },
  m16: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: Colors.active,
  },
  s16: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.active,
  },

  r18: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: Colors.active,
  },
  b18: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: Colors.active,
  },
  m18: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: Colors.active,
  },
  s18: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: Colors.active,
  },

  btn: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    height: 48,
    borderRadius: 30,
    justifyContent: 'center',
  },
  btntxt: {
    fontSize: 16,
    color: '#FCFCFD',
    fontFamily: 'Poppins-Bold',
  },
  btnoutline: {
    alignItems: 'center',
    height: 48,
    borderRadius: 30,
    justifyContent: 'center',
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  txtinput: {
    paddingHorizontal: 3,
    height: 48,
    paddingBottom: 3,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 48,
    borderRadius: 30,
    borderWidth: 2,
  },

  indicator: {
    borderColor: '#BDBDBD',
    borderWidth: 1,
    padding: 4,
    borderRadius: 20,
    backgroundColor: '#BDBDBD',
    marginHorizontal: 5,
  },

  shadow: {
    shadowColor: Colors.active,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: Colors.bg,
  },

  divider: {
    height: 1,
    backgroundColor: Colors.border,
  },

  divider1: {
    height: 1.5,
    backgroundColor: Colors.border,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
  },

  dividertxt: {
    color: Colors.disable,
    fontFamily: 'Poppins-Regular',
  },

  verticaldivider: {
    height: '60%',
    width: 1,
  },

  modalcontainer: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    // marginVertical: 140,
    paddingTop: 20,
    marginHorizontal: -10,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  follow: {
    height: 38,
    flex: 1,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  following: {
    height: 38,
    flex: 1,
    borderRadius: 10,
    backgroundColor: Colors.txt,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTextSelected: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    color: Colors.secondary,
    fontFamily: 'Poppins-Regular',
  },
  categoryText: {
    fontSize: 14,
    color: Colors.primary,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 20,
    paddingBottom: 5,
    paddingTop: 7,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    fontFamily: 'Poppins-Regular',
  },
  categorycontainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'space-between',
  },
});
