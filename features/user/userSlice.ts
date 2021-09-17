import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@app/store'
import Cookies from 'js-cookie'

interface UserState {
  detail: any,
  isLogged: boolean
}

const initialState: UserState = {
  detail: null,
  isLogged: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<object>) => {
      state.detail = action.payload;  
    },
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      Cookies.set('isLogged', action.payload, { sameSite: 'lax' });
      state.isLogged = JSON.parse(Cookies.get('isLogged'));
    }
  }
})

export const { setUser, setIsLogged } = userSlice.actions
export const selectUser = (state: RootState) => state.user.detail;
export const selectIsLogged = (state: RootState) => state.user.isLogged;
export default userSlice.reducer