import React from 'react';
import { Cable, ShieldCheck, Siren, Wifi } from 'lucide-react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: React.createElement(Cable, { size: 32 }),
    title: "Cabling Infrastructure",
    description: "Complete structured cabling solutions including fiber optic and copper installations."
  },
  {
    icon: React.createElement(ShieldCheck, { size: 32 }),
    title: "Physical Security",
    description: "Advanced security systems including CCTV, access control, and intrusion detection."
  },
  {
    icon: React.createElement(Siren, { size: 32 }),
    title: "Fire Alarm Systems",
    description: "Comprehensive fire detection and alarm systems for commercial properties."
  },
  {
    icon: React.createElement(Wifi, { size: 32 }),
    title: "Network Support",
    description: "Complete network infrastructure design, installation, and maintenance."
  }
];