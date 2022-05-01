import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginVertical: 16,
    },
    bookInfoContainer: {
        width: 200,
    },
    bookTitle: {
        color: COLORS.black,
        fontFamily: 'RobotoMono-Medium',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    bookQuantity: {
        color: COLORS.black,
        fontFamily: 'RobotoMono-Medium',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 8,
    },
    bookPrice: {
        color: COLORS.black,
        fontFamily: 'RobotoMono-Medium',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 8,
    },
    buttonContainer: {
        width: 160,
    },
    button: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.red,
        padding: 6,
        width: 140,
        alignSelf: 'flex-end',
    },
    buttonText: {
        fontFamily: 'RobotoMono-Medium',
        fontSize: 12,
        fontWeight: 'bold',
        color: COLORS.red,
        textAlign: 'center',
    },
});
