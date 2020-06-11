const Discord = require('discord.js')

module.exports = {
  command: "postjob",
  fn: async (msg) => {
    const filter = (msg) => !msg.author.bot
    const options = {
      max: 1,
      time: 60000
    }

    await msg.delete();

    let job = {};

    let jobNameMessage = await msg.author.send("Whats the name of the job?")
    let jobNameCollected = await jobNameMessage.channel.awaitMessages(filter, options);

    job.name = jobNameCollected.array()[0].content

    let fieldsOfInterestMessage = await msg.author.send("What are the fields of interest? (ex: WebDev, GameDev, Python etc.)")
    let fieldsOfInterestCollected = await fieldsOfInterestMessage.channel.awaitMessages(filter, options);
    job.fieldsOfInterest = fieldsOfInterestCollected.array()[0].content

    let familiarLanguagesMessage = await msg.author.send("What languages are you familiar with? If you are in the process of learning a languages, include those details as well.")
    let familiarLanguagesCollected = await familiarLanguagesMessage.channel.awaitMessages(filter, options);
    job.familiarLanguages = familiarLanguagesCollected.array()[0].content

    let personalBioMessage = await msg.author.send("Tell me a bit about you and your coding history.")
    let personalBioCollected = await personalBioMessage.channel.awaitMessages(filter, options);
    job.personalBio = personalBioCollected.array()[0].content

    let preferredSalaryMessage = await msg.author.send("What is the salary range or type? (ex: Unpaid, Paid, Salary, Single Payment etc.)")
    let preferredSalaryCollected = await preferredSalaryMessage.channel.awaitMessages(filter, options);
    job.preferredSalary = preferredSalaryCollected.array()[0].content

    let workHistoryMessage = await msg.author.send("What projects (open source, personal, or professional) have you contributed in?")
    let workHistoryCollected = await workHistoryMessage.channel.awaitMessages(filter, options);
    job.workHistory = workHistoryCollected.array()[0].content

    let specialRequirementsMessage = await msg.author.send("Any special requirements worth noting?")
    let specialRequirementsCollected = await specialRequirementsMessage.channel.awaitMessages(filter, options);
    job.specialRequirements = specialRequirementsCollected.array()[0].content

    let embed = new Discord.MessageEmbed()
      .setTitle(job.name)
      .setDescription(`A new job posting by ${msg.author.tag}`)
      .addField('Fields of Interest', job.fieldsOfInterest)
      .addField('Familiar languages', job.familiarLanguages)
      .addField('Personal Bio', job.personalBio)
      .addField('Preferred Salary', job.preferredSalary)
      .addField('Notable Work History', job.workHistory)
      .addField('Special Requirements', job.specialRequirements)

    msg.channel.send(embed);
    msg.channel.send(embed);
  }
}