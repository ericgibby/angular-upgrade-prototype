# AngularJS to React Upgrade Prototype

This is a basic AngularJS-React hybrid application to be used for prototyping partial upgrades by including components written with other frameworks, such as Angular or React.

## Setup

### Node

This project works best with Node v10.16 or greater. Node Version Manager (nvm) is recommended over simply installing Node, since it allows you to easily switch between
versions of Node without having to uninstall previous versions.

#### Windows

Download and run installer from https://github.com/coreybutler/nvm-windows/releases.

Run the following commands in the command prompt:

```cmd
nvm install 10.16.3
nvm use 10.16.3
```

#### Mac

Run the following commands in the terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
nvm install 10.16.3
nvm use 10.16.3
```

See https://github.com/creationix/nvm for more information on NVM.

### Install Dependencies

Run the following commands in the terminal/command prompt from the project directory:

```
yarn install
```

## Run Application

### Build

You can build a bundled, minified version of the application for distribution with the following command:

```
yarn build
```

### Start Development Web Server

You can start the webpack development server with the following command:

```
yarn start
```

### Tests

You can run tests a single time with the following command:

```
yarn test:ci
```

Or use the following command to watch for file changes and rerun tests after any file is updated:

```
yarn test
```
