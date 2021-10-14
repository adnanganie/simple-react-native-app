import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../core/responsiveUtil';
import {theme} from './theme';
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: theme.colors.headerBackground,
    height: 60,
  },
  headerText: {
    flex: 1,
    fontSize: 20,
    color: theme.colors.secondary,
    textAlignVertical: 'center',
  },
  body: {
    flex: 0.75,
  },
  footer: {
    flex: 0.25,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },
  flex7: {
    flex: 7,
  },
  flex8: {
    flex: 8,
  },
  flex9: {
    flex: 9,
  },
  flex10: {
    flex: 10,
  },
  flex11: {
    flex: 11,
  },
  sliderHeight: {
    height: hp(200),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  verticalCenter: {
    alignItems: 'center',
  },
  justifiedCenter: {
    justifyContent: 'center',
  },
  drawerRight: {
    justifyContent: 'flex-end',
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  right: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  left: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rowDirection: {
    flexDirection: 'row',
  },
  whiteBg: {
    backgroundColor: theme.colors.white,
  },
  backgroundColorBg: {
    backgroundColor: theme.colors.backgroundColor,
  },
  backgroundColorFadedBg: {
    backgroundColor: theme.colors.backgroundColorFaded,
  },
  backgroundColorFadedBgTwo: {
    backgroundColor: theme.colors.backgroundColorFadedTwo,
  },
  modalBackgroundColor: {
    backgroundColor: theme.colors.modalBackgroundColor,
  },
  backgroundTabBg: {
    backgroundColor: theme.colors.black,
  },
  primaryBg: {
    backgroundColor: theme.colors.primary,
  },
  successBg: {
    backgroundColor: theme.colors.green,
  },
  greyBg: {
    backgroundColor: theme.colors.headerBackground,
  },
  whiteColor: {
    color: theme.colors.secondary,
  },
  primaryColor: {
    color: theme.colors.primary,
  },
  drawerInnerShiftMargin: {
    marginLeft: 20,
    marginRight: 20,
  },
  drawerTitleMargin: {
    marginLeft: 15,
    marginRight: 15,
  },
  chartTitleMargin: {
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 60,
    borderWidth: 3,
    //borderColor: theme.colors.white,
  },
  border: {
    borderWidth: 2,
    borderColor: theme.colors.grey,
  },
  borderBlack: {
    borderWidth: 2,
    borderColor: theme.colors.black,
  },
  circularWhiteBorder: {
    width: 60,
    borderWidth: 1,
    borderRadius: 150,
    borderColor: theme.colors.white,
  },
  curvedBorder: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: theme.colors.drawerShiftDetailsButtonBorder,
  },
  textCurve: {
    borderWidth: 2,
    borderRadius: 80,
    borderColor: theme.colors.drawerShiftDetailsButtonBorder,
  },
  curvedBorderRadius5: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: theme.colors.drawerShiftDetailsButtonBorder,
  },
  curvedRadius5: {
    borderRadius: 5,
  },
  drawerShiftActiveColor: {
    backgroundColor: theme.colors.drawerShiftActiveBg,
  },
  font12: {
    fontSize: 12,
  },
  font10: {
    fontSize: 10,
  },
  fontHP6: {
    fontSize: hp(6),
  },
  font13: {
    fontSize: 13,
  },
  fontWP3: {
    fontSize: wp(2.5),
  },
  fontHP5: {
    fontSize: hp(5),
  },
  font16: {
    fontSize: 16,
  },
  font18: {
    fontSize: 18,
  },
  font20: {
    fontSize: 20,
  },
  font23: {
    fontSize: 23,
  },
  font46: {
    fontSize: 76,
  },
  vShiftDetails: {
    width: 150,
    height: 30,
  },
  padding1: {
    padding: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  bold: {
    fontWeight: 'bold', //--> causes issues with oxygen os text rendering
  },
  centerSpaceAround: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  verticalPadding5: {
    paddingVertical: 5,
  },
  verticalMargin5: {
    marginVertical: 5,
  },
  horizontalMargin20: {
    marginHorizontal: 20,
  },
  margin: {
    margin: 10,
  },
  margin30: {
    margin: 20,
  },
  borderBottomGrey: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.grey,
  },
  tabHeight: {
    height: hp('10%'),
  },
  subStnMgmtListContainer: {
    flex: 10,
    height: hp('68%'),
  },

  /*report screen  header*/
  dayreport: {
    flex: 1,
    height: 30,
  },
  /* Horizontal bar */
  horizontal: {
    flex: 5,
    height: hp('25%'),
  },
  /*vertical bar */
  verticalbar: {
    flex: 6,
    height: hp('49%'),
    paddingTop: 5,
  },
  verticalbarMaterialStock: {
    height: hp('45%'),
    paddingTop: 5,
  },
  gaugeChart: {
    height: hp('41%'),
  },
  dateWiseHorizontalBar: {
    flex: 6,
    height: hp('60%'),
    paddingTop: 5,
  },
  drawerShiftDropdown: {
    flex: 1,
    height: 150,
    padding: 10,
  },
  adminDropDown: {
    flex: 1,
    height: 150,
    padding: 10,
  },
  topMargin3: {
    marginTop: 3,
  },
  topMargin40: {
    marginTop: 40,
  },
  drawerShiftDropdownBg: {
    backgroundColor: theme.colors.drawerShiftBg,
  },
  /* Dropdown */
  dropdown: {
    flex: 1,
    height: 50,
  },
  dropdownIOS: {
    flex: 1,
    height: 50,
  },

  /*center Navigation buttons*/
  nav: {
    height: 50,
    borderTopColor: theme.colors.primary,
    borderTopWidth: 2,
  },
  addButton: {
    height: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  navButton: {
    marginHorizontal: 3,
    marginVertical: 3,
    textAlign: 'center',
    fontSize: wp('22%'),
  },
  navActiveButton: {
    margin: 0,
    textAlign: 'center',
    fontSize: wp('22%'),
    marginTop: 0,
  },
  mb5: {
    marginBottom: 5,
  },
  loader1: {
    fontSize: 18,
    color: theme.colors.secondary,
    paddingTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.grey,
    marginBottom: 10,
  },
  loader2: {
    fontSize: 18,
    color: theme.colors.secondary,
    paddingTop: 10,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: theme.colors.grey,
    borderBottomColor: theme.colors.grey,
    marginBottom: 10,
  },
  modalView: {
    margin: 2,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    height: '90%',
    paddingHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    zIndex: 1000,
  },
  textStyle: {
    color: 'white',
    //fontWeight: 'bold',
    textAlign: 'center',
  },
  dateButton: {
    width: '80%',
    height: 50,
    backgroundColor: theme.colors.dateSelectionButtonBg,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 0,
  },
});

export default styles;
