import { Server, Socket } from "socket.io";
import logger from "./utils/logger";
import uniqid from 'uniqid';

// A list of all channels
const channels: Record<string, { name: string }> = {};

// EVENTS is used to detect and handle different types of events from the client
const EVENTS = {
  connection: "connection",
  CLIENT: {
    CREATE_CHANNEL: "CREATE_CHANNEL",
    SEND_CHANNEL_MESSAGE: "SEND_CHANNEL_MESSAGE"
  },
  SERVER: {
    CHANNELS: "CHANNELS",
    JOINED_CHANNEL: "JOINED_CHANNEL",
  },
  MESSAGE: {
    SEND_MESSAGE: "SEND_MESSAGE"
  }
}

function socket({ io }: { io: Server }) {
  logger.info("Socket.io connected");

  io.on("connection", (socket: Socket) => {
    logger.info(`User connected: ${socket.id}`);
    
    socket.on(EVENTS.MESSAGE.SEND_MESSAGE, ({ message, channelId }: { message: string, channelId: string }) => {
      logger.info(`Message received: ${message}`);
      io.to(channelId).emit(EVENTS.MESSAGE.SEND_MESSAGE, { message, channelId });
    });

    socket.on(EVENTS.CLIENT.CREATE_CHANNEL, ({ channelName }) => {
      logger.info(`User ${socket.id} created channel ${channelName}`);
      const channelID = uniqid();

      channels[channelID] = {
        name: channelName
      }

      socket.join(channelID);
      socket.broadcast.emit(EVENTS.SERVER.CHANNELS, channels);
    });

    socket.on(EVENTS.CLIENT.SEND_CHANNEL_MESSAGE, ({ channelID, message, username }) => {
      const date = new Date();
      socket.to(channelID).emit(EVENTS.SERVER.JOINED_CHANNEL, { message, username, time: `${date.getHours()}:${date.getMinutes()}` });
    });
  });
}

export default socket;