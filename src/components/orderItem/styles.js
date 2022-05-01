import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginVertical: 16,
    },
    orderContainer: {
        width: 250,
    },
    orderId: {
        color: COLORS.black,
        fontFamily: 'RobotoMono-Medium',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    orderAmount: {
        color: COLORS.black,
        fontFamily: 'RobotoMono-Medium',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 8,
    },
});
