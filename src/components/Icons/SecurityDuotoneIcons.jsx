import React from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaKey, FaDatabase } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';

export const ShieldAltDuotone = props => <FaShieldAlt {...props} style={{ color: '#dc2626' }} />; // Red
export const LockDuotone = props => <FaLock {...props} style={{ color: '#ea580c' }} />; // Orange
export const SecurityDuotone = props => <MdSecurity {...props} style={{ color: '#7c3aed' }} />; // Violet
export const UserShieldDuotone = props => <FaUserShield {...props} style={{ color: '#10b981' }} />; // Green
export const KeyDuotone = props => <FaKey {...props} style={{ color: '#2563eb' }} />; // Blue
export const DatabaseDuotone = props => <FaDatabase {...props} style={{ color: '#facc15' }} />; // Yellow
