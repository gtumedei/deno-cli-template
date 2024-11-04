import { Command } from "@cliffy/command"
import downloadCommand from "~/commands/download.ts"
import helloCommand from "~/commands/hello.ts"
import formsCommand from "~/commands/forms.ts"

const mainCommand = new Command()
  .name("deno-cli-template")
  .action(() => {
    console.log(mainCommand.getHelp())
  })
  .command(helloCommand.getName(), helloCommand)
  .command(downloadCommand.getName(), downloadCommand)
  .command(formsCommand.getName(), formsCommand)

await mainCommand.parse(Deno.args)
