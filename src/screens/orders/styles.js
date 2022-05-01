import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    mainTitle: {
        color: COLORS.black,
        fontFamily: 'RobotoMono-Medium',
        fontSize: 40,
        fontWeight: 'bold',
        marginVertical: 16,
    },
});
