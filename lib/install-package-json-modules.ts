const packageJSON = JSON.parse(await Deno.readTextFile('package.json') as string)

const dependencies: Record<string, unknown> = packageJSON.dependencies ?? {}
const devDependencies: Record<string, unknown> = packageJSON.devDependencies ?? {}

const deps = Object.keys(dependencies).concat(Object.keys(devDependencies))

const output = deps.map((dep, i) => `import * as dep${i} from 'npm:${dep}'`).join('\n')

const command = new Deno.Command(Deno.execPath(), {
  args: [
    'eval',
    output,
  ],
})

const { code } = await command.output()

console.assert(code === 0)
