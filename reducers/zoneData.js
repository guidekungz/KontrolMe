import ZoneConstants from "../constants/ZoneConstants";



const zoneData = (state = {}, action) => {
    
    switch (action.type) {
        case ZoneConstants.TOGGLE_ADD_ZONE_DIALOG:
            return { ...state, openAddZoneDialog: action.openAddZoneDialog };
        case ZoneConstants.ADD_ZONE_DATA:
            console.log('state',state,'action',action);
            let zoneList = state.zoneDataList;
            zoneList = [...zoneList, action.data];
            return { ...state, zoneDataList: zoneList };
        default:
            return state;
    }
};
  
export default zoneData;