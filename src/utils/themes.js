import { neutral, blue } from "./colors";
import { PrimaryFont } from "./typography"

export const defaultTheme = {
    primaryColor : blue[300],
    primaryHoverColor : blue[200],
    primaryActiveColor : blue[100],
    textColorOnPrimary : neutral[100],
    textColor : neutral[400],
    textColorInverted : neutral[100],
    PrimaryFont :PrimaryFont
}

export const darkTheme = {
    primaryColor : blue[300],
    primaryHoverColor : blue[200],
    primaryActiveColor : blue[100],
    textColorOnPrimary : neutral[100],
    textColor : neutral[400],
    textColorInverted : neutral[100],
    PrimaryFont :PrimaryFont,
    
    backgroundColors : {
        light : neutral[100],
        lightDark : neutral[400],
        dark : "#000",

    }

}

