import { Command } from "@cliffy/command"
import { CompletionsCommand } from "@cliffy/command/completions"
import downloadCommand from "~/commands/download.ts"
import formsCommand from "~/commands/forms.ts"
import helloCommand from "~/commands/hello.ts"

const mainCommand = new Command()
  .name("deno-cli-template")
  .action(() => {
    console.log(mainCommand.getHelp())
  })
  .command("completions", new CompletionsCommand())
  .command(helloCommand.getName(), helloCommand)
  .command(downloadCommand.getName(), downloadCommand)
  .command(formsCommand.getName(), formsCommand)

await mainCommand.parse(Deno.args)
