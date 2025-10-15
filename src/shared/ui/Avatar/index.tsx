import { useState } from 'react';
import cn from 'classnames';
import './styles.scss';
import type { Role } from '../../../types/auth';

interface AvatarProps {
    src?: string;
    name?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    role?: Role;
}

export const Avatar = ({ src = '/img/Avatar.png', name = 'Ислам Парчиев', size = 'medium', className, role = "admin" }: AvatarProps) => {
    const [imageError, setImageError] = useState(false);

    const getInitials = () => {
        const names = name.split(' ');
        return names
            .map(n => n[0])
            .join('')
            .toUpperCase();
    };

    const sizeMap: Record<string, number> = {
        small: 32,
        medium: 44,
        large: 64,
    };

    const avatarSize = sizeMap[size];

    return (
        <div className={cn('Avatar', className)} tabIndex={6} data-testid="avatar">
            <div className={cn('Avatar__content', size)}>
                {src && !imageError ? (
                    <img
                        src={src}
                        alt={`Аватар ${name}`}
                        className="Avatar__image"
                        width={avatarSize}
                        height={avatarSize}
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="Avatar__fallback">{getInitials()}</div>
                )}
            </div>
            <div className="Avatar__info">
                {name && <span className="Avatar__name">{name}</span>}
                {role && <span className="Avatar__role">{role}</span>}
            </div>

        </div>
    );
};