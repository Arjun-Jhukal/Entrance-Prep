import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum NotificationType {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Info = "info",
}

type Notification = {
  open: boolean;
  message: string;
  variant: NotificationType;
  autoHide: boolean;
};

type ShowNotification = Omit<Notification, "open">;

const initialState = {
  open: false,
  message: "",
  variant: NotificationType.Success,
  autoHide: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<ShowNotification>) => {
      state.open = true;
      state.message = action.payload.message;
      state.variant = action.payload.variant;
      state.autoHide = action.payload.autoHide;
    },
    hideNotification: (state) => {
      state.open = false;
      state.message = "";
      state.autoHide = false;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
