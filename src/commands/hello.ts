import { Command } from "@cliffy/command"
import { blue, gray, green } from "@std/fmt/colors"

const helloCommand = new Command()
  .name("hello")
  .description("Say hello.")
  .option("-f, --from <name:string>", "Who is saying hello.", { required: true })
  .option("--hide-src", "Hide the source file's path from the output.", { default: false })
  .arguments("<name:string>")
  .action(({ from, hideSrc }, name) => {
    console.log(
      `👋 Hello ${blue(name)} from ${green(from)}! \n   ${
        hideSrc ? "" : gray(import.meta.filename ?? "")
      }`
    )
  })

export default helloCommand
