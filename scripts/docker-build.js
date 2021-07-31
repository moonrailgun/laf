#! /usr/bin/env node

const fse = require('fs-extra')
const child_process = require('child_process')
const path = require('path')
const { getAppServerVersion, getDevopsServerVersion, getDevopsAdminVersion, images , buildImage} = require('./utils')

/**
 * main function
 */
function main() {

  const devopsDockerfile = path.resolve(__dirname, '../packages/devops-server')
  const devopsVersion = getDevopsServerVersion()
  buildImage(devopsDockerfile, `${images.devops}:${devopsVersion}`, `${images.devops}:latest`)

  const appDockerfile = path.resolve(__dirname, '../packages/app-server')
  const appVersion = getAppServerVersion()
  buildImage(appDockerfile, `${images.app}:${appVersion}`, `${images.app}:latest`)

  const devopsAdminDockerfile = path.resolve(__dirname, '../packages/devops-admin')
  const devopsAdminVersion = getDevopsAdminVersion()
  buildImage(devopsAdminDockerfile, `${images.devops_admin}:${devopsAdminVersion}`, `${images.devops_admin}:latest`)
}

main()
