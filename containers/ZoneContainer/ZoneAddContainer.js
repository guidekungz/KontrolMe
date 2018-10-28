import { connect } from 'react-redux';
import ZoneAddDialog from '../../screens/ZoneScreen/ZoneAddDialog';
import { addZoneData, toggleAddZoneDialog } from '../../actions/ZoneAction';

const mapDispatchToProps = {
    addZoneData,
    toggleAddZoneDialog
};

const mapStateToProps = state => ({
    zoneDataList: state.zoneDataList,
    openAddZoneDialog: state.openAddZoneDialog
});
  

export default connect(null, mapDispatchToProps)(ZoneAddDialog);