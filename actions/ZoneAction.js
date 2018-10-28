import ZoneConstants from "../constants/ZoneConstants";

export const toggleAddZoneDialog = (bool) => {
    return { type: ZoneConstants.TOGGLE_ADD_ZONE_DIALOG, openAddZoneDialog: bool };
}

export const addZoneData = (data) => {
    return { type: ZoneConstants.ADD_ZONE_DATA, data: data };
}
  