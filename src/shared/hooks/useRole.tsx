import { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
import { setRoleAsync, clearRole, setError } from '../../store/authSlice';
import type { UseRoleReturn, Role } from '../../types/auth';


const useRole = (): UseRoleReturn => {
    const dispatch: AppDispatch = useDispatch();
    const { role, isLoading, error } = useSelector((state: RootState) => state.auth);

    // Функция для установки роли
    const setRole = useCallback((newRole: Role) => {
        dispatch(setRoleAsync(newRole));
    }, [dispatch]);

    // Функция для проверки роли
    const hasRole = useCallback((allowedRole: Role | Role[]): boolean => {
        if (!role) return false;

        if (Array.isArray(allowedRole)) {
            return allowedRole.includes(role);
        }
        return role === allowedRole;
    }, [role]);

    // Функция для очистки роли
    const clearRoleHandler = useCallback(() => {
        dispatch(clearRole());
    }, [dispatch]);

    // Функция для очистки ошибок
    const clearError = useCallback(() => {
        dispatch(setError(null));
    }, [dispatch]);

    // Мемоизируем возвращаемый объект
    const roleApi = useMemo(() => ({
        role,
        hasRole,
        setRole,
        clearRole: clearRoleHandler,
        isLoading,
        error,
        clearError,
    }), [role, hasRole, setRole, clearRoleHandler, isLoading, error, clearError]);

    return roleApi;
};

export default useRole;