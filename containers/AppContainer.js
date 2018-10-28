import { connect } from 'react-redux';
import AppNavigator from '../navigation/AppNavigator';

const mapStateToProps = state => ({
    ...state
});


export default connect(mapStateToProps)(AppNavigator);
