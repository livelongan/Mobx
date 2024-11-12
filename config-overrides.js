/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
// const { override } = require('customize-cra')

// module.exports = override()

const { override } = require('customize-cra')

// const childProcess = require('child_process')
// const moment = require('moment')

// const getDateString = (date) => {
//     return moment(date).format('YYYY-MM-DD HH:mm:ss')
// }
// const branchName = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
// const lastCommit = childProcess.execSync('git rev-parse HEAD').toString().trim()
// const lastCommitUser = childProcess.execSync('git show -s --format=%cn').toString().trim()
// const lastDate = new Date(childProcess.execSync('git show -s --format=%cd').toString())
// const lastCommitDate = getDateString(lastDate)

// const buildDate = getDateString(new Date())

// const version = {
//     lastDate,
//     lastCommit,
//     branchName,

//     buildDate,
//     lastCommitUser,
//     lastCommitDate,
// }

// process.env.REACT_APP_COMMIT = JSON.stringify(version)

module.exports = override()