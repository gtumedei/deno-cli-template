import { Command } from "@cliffy/command"
import { Checkbox, Input, Secret, Select, Toggle } from "@cliffy/prompt"
import outdent from "@cspotcode/outdent"
import { blue, bold, brightGreen, brightRed, green } from "@std/fmt/colors"

const loginCommand = new Command()
  .name("login")
  .description("Login with your credentials.")
  .action(async () => {
    const username = await Input.prompt("Username")
    const password = await Secret.prompt("Password")
    await Toggle.prompt("Stay logged in?")
    console.log("\nLogging you in...")
    await new Promise((r) => setTimeout(r, 2000))
    console.log(outdent`

    ${green("✓")} ${bold("Success!")}

      Your credentials are:
        ${username}
        ${password}
    `)
  })

const voteCommand = new Command()
  .name("vote")
  .description("Pick your favorite programming languages.")
  .action(async () => {
    const typing: string = await Select.prompt({
      message: "Do you prefer statically or dynamically typed languages?",
      options: [
        { value: "static", name: "Statically typed" },
        { value: "dynamic", name: "Dynamically typed" },
        Select.separator("⎯⎯⎯"),
        { value: "both", name: "I like both" },
      ],
    })

    const languages = {
      staticallyTyped: ["Rust", "Go", "Java", "TypeScript"],
      dynamicallyTyped: ["Python", "JavaScript", "Elixir"],
    }
    const languageOptions: string[] = []
    if (typing == "static" || typing == "both") {
      languageOptions.push(...languages.staticallyTyped)
    }
    if (typing == "dynamic" || typing == "both") {
      languageOptions.push(...languages.dynamicallyTyped)
    }
    const chosenLanguages = await Checkbox.prompt({
      message: "Pick your favorite/s",
      options: languageOptions,
      confirmSubmit: false,
      check: brightGreen("●"),
      uncheck: brightRed("○"),
    })

    console.log(`\n${blue("i")} You chose: ${chosenLanguages.join(", ") || "none"}.`)
  })

const formsCommand = new Command()
  .name("forms")
  .description("Compile some example forms.")
  .action(() => {
    console.log(formsCommand.getHelp())
  })
  .command(loginCommand.getName(), loginCommand)
  .command(voteCommand.getName(), voteCommand)

export default formsCommand
