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
    subTitle: {
        color: COLORS.black,
        fontFamily: 'RobotoMono-Medium',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    text: {
        color: COLORS.black,
        fontFamily: 'RobotoMono-Medium',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 24,
        marginHorizontal: 80,
        lineHeight: 32,
        textAlign: 'center',
    },
    button: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.yellow,
        padding: 12,
    },
    buttonText: {
        fontFamily: 'RobotoMono-Medium',
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.yellow,
    },
});
