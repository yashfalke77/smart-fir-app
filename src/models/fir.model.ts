import { PoliceStation } from './policeStation.model';
import { UserModel } from './user.model';

interface IStatus {
  status: string;
  updatedAt: string;
}

export interface IFir {
  _id ?: string;
  subject: string;
  description: string;
  policeStation: PoliceStation;
  user:UserModel;
  isEnabled: boolean;
  status: IStatus[];
  investigationOfficer?: string;
  createdAt: Date;
  updatedAt: Date;
  transactionHash?: string;
  FIRnumber?: number;
}

export interface IFirInput {
  subject: string;
  description: string;
  policeStation: string;
  user:UserModel;
  isEnabled: boolean;
  status: IStatus[];
  investigationOfficer?: string;
  createdAt: Date;
  updatedAt: Date;
}
