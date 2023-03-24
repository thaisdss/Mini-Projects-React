import { Container } from "./style";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { shade } from "polished";

type Props = {
    toggleTheme: () => void;
}

export function Header( {toggleTheme}: Props ) {
    const { colors, title } = useContext(ThemeContext)

    return(
        <Container>
            <h1>Hello World</h1>

            <Switch 
                onChange={toggleTheme}
                checked={title === "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secondary}
            />
        </Container>
    );
}