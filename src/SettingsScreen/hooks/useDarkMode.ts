import { useDispatch, useSelector } from 'react-redux';
import { toggleColorMode } from "../../../redux/actions";
import { getIsDarkModeEnabled } from "../../../redux/selectors";
import { useColorMode } from "native-base";

type DarkMode = {
    isDarkModeEnabled: boolean;
    toggleMode: () => void;
};
// Don't use, made for testing purposes
const useDarkMode = (): DarkMode => {
    const {colorMode, toggleColorMode: toggleDarkMode} = useColorMode();
    const darkModeEnabled = colorMode === 'dark';
    const dispatch = useDispatch();
    const isDarkModeEnabled = useSelector(getIsDarkModeEnabled);
    const toggleMode = () => {
        toggleDarkMode();
        dispatch(toggleColorMode(!darkModeEnabled));
    };
    return {
        isDarkModeEnabled,
        toggleMode
    };
};

export default useDarkMode;
