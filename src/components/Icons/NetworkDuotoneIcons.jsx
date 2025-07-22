import React from 'react';
import { SiCisco, SiVmware, SiLinux } from 'react-icons/si';
import { FaServer, FaWifi } from 'react-icons/fa';
import MikrotikIcon from './MikrotikIcon';

export const CiscoDuotone = props => <SiCisco {...props} style={{ color: '#1BA0D7' }} />; // Cisco Blue
export const VmwareDuotone = props => <SiVmware {...props} style={{ color: '#607078' }} />; // VMware Gray
export const LinuxDuotone = props => <SiLinux {...props} style={{ color: '#FCC624' }} />; // Linux Yellow
export const ServerDuotone = props => <FaServer {...props} style={{ color: '#6B7280' }} />; // Neutral Gray
export const WifiDuotone = props => <FaWifi {...props} style={{ color: '#10B981' }} />; // Green
export const MikrotikDuotone = props => (
  <span style={{
    display: 'inline-block',
    borderRadius: '50%',
    background: '#3C3C3B',
    border: '2px solid #fff',
    padding: 4,
    boxShadow: '0 0 12px #3C3C3B',
    width: 48,
    height: 48,
    boxSizing: 'border-box',
    position: 'relative',
  }}>
    <MikrotikIcon {...props} color="#fff" width={38} height={38} style={{ display: 'block', margin: 'auto', position: 'absolute', top: 4, left: 4 }} />
  </span>
); // MikroTik on solid black circle
