import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  const time = new Date(timestamp);
  return `${level}: ${message} [${time.getHours()}:${time.getMinutes()}.${time.getSeconds()}]`;
});

export const log = createLogger({
  format: combine(colorize(), timestamp(), myFormat),
  transports: [new transports.Console()],
});
