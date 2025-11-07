export const theme = {
  colors: {
    primary: '#1F3639',
    background: '#F0EEE9',
    important: '#005E46',
    errorColor: "#FF0000",
    defaultBlack: "#000000ff",
    defaultWhite: "#ffffffff",
    defaultGray: "gray"
  },
  fonts: {
    main: {
        RobotoRegular: "../polices/Roboto/static/Roboto-Regular.ttf",
        RobotoMedium: "../polices/Roboto/static/Roboto-Medium.ttf",
        RobotoBold: "../polices/Roboto/static/Roboto-Bold.ttf",
    },
    accessibility: {
        OpenSansRegular: "../polices/Open_Sans/static/OpenSans-Regular.ttf",
        OpenSansSemiBold: "../polices/Open_Sans/static/OpenSans-SemiBold.ttf",
    },
    secondary: {
        AtkinsonRegular: "../polices/Atkinson-Hyperlegible/Print Fonts/Atkinson-Hyperlegible-Regular-102.otf",
        AtkinsonBold: "../polices/Atkinson-Hyperlegible/Print Fonts/Atkinson-Hyperlegible-Bold-102.otf"
    },
    sizeStyle: {
        title: 30,
        texte: 16,
        loginTitle: 20,
        placeholderInput: 14,
        fontWeight: 500,
        errorInput: 14,
        interLigne: 24,
        letterSpacing: 0.12,
        contraste: 1.75, //S'utilise de la sorte filter: contrast(1); et contrast(0.65) = 65% de contraste donc contrast(65%)
    }
  },
};
