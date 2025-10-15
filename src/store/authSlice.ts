// store/authSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AuthState, Role } from '../types/auth'

const initialState: AuthState = {
	role: null,
	isLoading: false,
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setRoleStart: state => {
			state.isLoading = true
			state.error = null
		},
		setRoleSuccess: (state, action: PayloadAction<Role>) => {
			state.role = action.payload
			state.isLoading = false
			state.error = null
		},
		setRoleFailure: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		},
		clearRole: state => {
			state.role = null
			state.error = null
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload
		},
	},
})

export const { setRoleStart, setRoleSuccess, setRoleFailure, clearRole, setError } = authSlice.actions

// Асинхронный action для установки роли (например, с API вызовом)
export const setRoleAsync = (newRole: Role) => async (dispatch: any) => {
	try {
		dispatch(setRoleStart())

		// Имитация API вызова
		await new Promise(resolve => setTimeout(resolve, 1000))

		// Здесь может быть реальный API вызов
		// const response = await api.setUserRole(newRole);

		dispatch(setRoleSuccess(newRole))
	} catch (error) {
		dispatch(setRoleFailure('Ошибка при установке роли'))
	}
}

export default authSlice.reducer
