import theme from './theme'
import 'styled-components'

declare module 'styled-components'{
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType{}
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.gif' {
    const value: string;
    export default value;
}
