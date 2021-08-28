export const defaultValues = {
  gray100: '#fafafa',
  gray200: '#f5f5f5',
  gray300: '#eeeeee',
  gray400: '#e0e0e0',
  gray500: '#bdbdbd',
  gray600: '#9e9e9e',
  gray700: '#757575',
  gray800: '#616161',
  gray900: '#424242',
  gray1000: '#212121',
  primaryColor: '#b02b73',
  defaultPadding: '12px',
};

export const lightTheme = {
  ...defaultValues,
  fontColor: defaultValues.gray700,
};

export const darkTheme = {
  ...defaultValues,
  fontColor: defaultValues.gray100,
};
