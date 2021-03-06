/*
 * @Description:
 * @Author: songlin
 * @Date: 2022-06-15 15:09:46
 * @LastEditTime: 2022-06-16 11:04:39
 * @LastEditors: songlin
 */
// Invoked on the commit-msg git hook by yorkie.
console.log('start')
// const chalk = require('chalk')
const msgPath = process.env.GIT_PARAMS
console.log(process.env.GIT_PARAMS)
console.log(process.env)

const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/
console.log(123)

if (!commitRE.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      `invalid commit message format.`
    )}\n\n` +
      chalk.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${chalk.green(
        `fix(v-model): handle events on blur (close #28)`
      )}\n\n` +
      chalk.red(`  See .github/commit-convention.md for more details.\n`)
  )
  process.exit(1)
}
