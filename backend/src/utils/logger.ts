import pino from 'pino';
import pretty from 'pino-pretty';
import dayjs from 'dayjs';

const logger = pino({
  transport: {
    target: 'pino-pretty'
  },
  customPrettifiers: {
    time: (timestamp : any) => `🕰 ${timestamp}`,
  },
});

export default logger;