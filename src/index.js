const telegramBot = require('node-telegram-bot-api');
const token = '';
const bot = new telegramBot(token, { polling: true });


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
})
