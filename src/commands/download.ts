import { Command } from "@cliffy/command"
import { MultiProgressBar } from "@deno-library/progress"
import { bold, brightGreen, gray, green } from "@std/fmt/colors"

const downloadCommand = new Command()
  .name("download")
  .description("Download stuff from the internet.")
  .action(async () => {
    console.log("Downloading...")
    const bar = new MultiProgressBar({
      title: " ",
      complete: brightGreen("■"),
      incomplete: gray("□"),
      display: ":bar :text :percent :time",
    })

    for (let progress = 0; progress < 100; progress++) {
      await new Promise((r) => setTimeout(r, 20))
      await bar.render([
        {
          completed: progress,
          total: 100,
          text: "something.zip",
        },
      ])
    }

    console.log(`\n\n${green("✓")} ${bold("Done!")}`)
  })

export default downloadCommand
