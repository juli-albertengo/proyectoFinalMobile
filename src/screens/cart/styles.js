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
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 80,
        paddingTop: 24,
    },
    textTotal: {
        color: COLORS.black,
        fontFamily: 'RobotoMono-Medium',
        fontSize: 24,
        fontWeight: '300',
        marginRight: 16,
    },
    button: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.green,
        padding: 8,
        marginLeft: 16,
    },
    buttonText: {
        fontFamily: 'RobotoMono-Medium',
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.green,
    },
});
