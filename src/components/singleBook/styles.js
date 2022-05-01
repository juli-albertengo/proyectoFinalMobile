import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginVertical: 16,
    },
    image : {
        width: 120,
        height: 180,
        marginRight: 16,
    },
    bookInfoContainer: {
        maxWidth: 200,
    },
    bookTitle: {
        color: COLORS.black,
        fontFamily: 'RobotoMono-Medium',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    bookAuthor: {
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
    button: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.lightBlue,
        padding: 8,
    },
    buttonText: {
        fontFamily: 'RobotoMono-Medium',
        fontSize: 12,
        fontWeight: 'bold',
        color: COLORS.lightBlue,
        textAlign: 'center',
    },
});
