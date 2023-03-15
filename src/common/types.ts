interface IActionDate {
  createdAt?: string | null;
  updatedAt?: string | null;
  deletedAt?: string | null;
}

export interface IMessage extends IActionDate {
  id?: number;
  text: string;
  category?: number;
}

export interface ICategory extends IActionDate {
  id?: number;
  name: string;
  description: string;
}

export interface IChannel extends IActionDate {
  id?: number;
  name: string;
  description: string;
}
export interface IUser extends IActionDate {
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
}

export interface ILog extends IActionDate {
  id: number;
  time: string;
  user: IUser;
  channel: IChannel;
  category: ICategory;
  message: IMessage;
}

export interface ILogRow {
  id: number;
  time: string;
  user: string;
  channel: string;
  category: string;
  message: string;
}
