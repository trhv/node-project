import winston from 'winston'

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

// Let’s spice up Winston's chat with timestamps and colors
logger.format = winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.simple()
);

// Sometimes, Winston needs to whisper only the important stuff
logger.add(new winston.transports.File({ filename: 'error.log', level: 'error' }));
export default logger;