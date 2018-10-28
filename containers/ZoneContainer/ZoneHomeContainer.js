import { connect } from 'react-redux';
import ZoneScreen from '../../screens/ZoneScreen/ZoneHome';
import { toggleAddZoneDialog, addZoneData } from '../../actions/ZoneAction';

const mapStateToProps = state => ({
    zoneDataList: state.zoneDataList,
    openAddZoneDialog: state.openAddZoneDialog
});

const mapDispatchToProps = {
    toggleAddZoneDialog,
    addZoneData
};


export default connect(mapStateToProps, mapDispatchToProps)(ZoneScreen);
