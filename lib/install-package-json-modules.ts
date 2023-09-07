const packageJSON = JSON.parse(await Deno.readTextFile('package.json') as string)

const dependencies: Record<string, unknown> = packageJSON.dependencies ?? {}
const devDependencies: Record<string, unknown> = packageJSON.devDependencies ?? {}

const deps = Object.keys(dependencies).concat(Object.keys(devDependencies))

const output = deps.map((dep, i) => `import * as dep${i} from 'npm:/${dep}'`).join('\n')

console.log(output)

const command = new Deno.Command(Deno.execPath(), {
  args: [
    'eval',
    output,
  ],
})

const { stdout, stderr } = await command.output()

await Deno.stdout.write(stdout)
await Deno.stderr.write(stderr)
