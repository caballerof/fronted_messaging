import { ILog, ILogRow } from '../common/types';

export function spaceCase(text: string) {
  const result = text.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export function generateLogRow(logs: ILog[]): ILogRow[] {
  const result = logs.map((log) => {
    const { id, time, category, user, channel, message } = log;

    const row: ILogRow = {
      id: id,
      time: time,
      category: category.name,
      channel: channel.name,
      message: message.text,
      user: user.name,
    };

    return row;
  });

  return result;
}
