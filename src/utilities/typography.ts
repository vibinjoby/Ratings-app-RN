import Colors from './colors'
import { TextStyle, Platform } from 'react-native'

type FontConfig = TextStyle

type FontWeightType = {
  regular: FontConfig
  bold: FontConfig
  italic: FontConfig
  boldItalic: FontConfig
}

type Typographytype = {
  Title1: FontWeightType
  /* Title2: FontWeightType
  Title3: FontWeightType
  Headline: FontWeightType
  Subhead: FontWeightType
  Callout: FontWeightType
  Footnote: FontWeightType
  Caption2: FontWeightType */
  Body: FontWeightType
  Caption1: FontWeightType
  RegularFont: FontConfig
  ItalicFont: FontConfig
  BoldFont: FontConfig
  BoldItalicFont: FontConfig
}

const AvertaFont = {
  fontFamily: Platform.OS === 'android' ? 'poppins_regular' : 'Poppins-Regular',
}

const Title1Style: FontConfig = {
  ...AvertaFont,
  color: Colors.black,
  fontSize: 26,
  lineHeight: 29,
}

const CaptionStyle: FontConfig = {
  ...AvertaFont,
  fontSize: 16,
  color: Colors.textHint,
}

const BodyStyle: FontConfig = {
  ...AvertaFont,
  fontSize: 18,
  color: Colors.black,
}

const bold: FontConfig = {
  fontFamily: Platform.OS === 'ios' ? 'Poppins-Bold' : 'poppins_bold',
}

const italic: FontConfig = {
  fontFamily: Platform.OS === 'ios' ? 'Poppins-Italic' : 'poppins_italic',
}

const boldItalic: FontConfig = {
  fontFamily: Platform.OS === 'ios' ? 'Poppins-BoldItalic' : 'poppins_bold_italic',
}

const Typography: Typographytype = {
  Title1: {
    regular: {
      ...Title1Style,
    },
    bold: {
      ...Title1Style,
      ...bold,
    },
    italic: {
      ...Title1Style,
      ...italic,
    },
    boldItalic: {
      ...Title1Style,
      ...boldItalic,
    },
  },
  Caption1: {
    regular: {
      ...CaptionStyle,
    },
    bold: {
      ...CaptionStyle,
      ...bold,
    },
    italic: {
      ...CaptionStyle,
      ...italic,
    },
    boldItalic: {
      ...CaptionStyle,
      ...boldItalic,
    },
  },
  Body: {
    regular: {
      ...BodyStyle,
    },
    bold: {
      ...BodyStyle,
      ...bold,
    },
    italic: {
      ...BodyStyle,
      ...italic,
    },
    boldItalic: {
      ...BodyStyle,
      ...boldItalic,
    },
  },
  RegularFont: {
    ...AvertaFont,
  },
  BoldFont: {
    ...bold,
  },
  BoldItalicFont: {
    ...boldItalic,
  },
  ItalicFont: {
    ...italic,
  },
}

export default Typography
