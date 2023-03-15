export type logColumnsName = 'id' | 'time' | 'user' | 'channel' | 'category' | 'message';

export interface IColumn {
  id: logColumnsName;
  label: string;
  minWidth?: number;
  align?: 'left' | 'right' | 'center';
  format?: (value: number | string) => string;
}

export const logColumns: readonly IColumn[] = [
  { id: 'id', label: 'Id', minWidth: 50 },
  {
    id: 'time',
    label: 'Date',
    minWidth: 100,
    align: 'center',
    format: (value: string) => new Date(Number(value)).toLocaleString(),
  },
  {
    id: 'user',
    label: 'User',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'channel',
    label: 'Channel',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'category',
    label: 'Category',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'message',
    label: 'Message',
    minWidth: 170,
    align: 'left',
  },
];
