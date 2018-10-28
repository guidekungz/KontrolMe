import { connect } from 'react-redux';
import ZoneList from '../../screens/ZoneScreen/ZoneList';
import { toggleAddZoneDialog } from '../../actions/ZoneAction';

const mapStateToProps = state => ({
    zoneDataList: state.zoneDataList
});

const mapDispatchToProps = {
    toggleAddZoneDialog
};

export default connect(null, mapDispatchToProps)(ZoneList);
