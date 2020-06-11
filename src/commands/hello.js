module.exports = {
  command: "hello",
  fn: async (msg) => {
    await msg.reply("world!");
  }
}