# taskerjs-starter

Starter application for creating Tasker tasks in JavaScript with [taskerjs](https://github.com/benfo/taskerjs).

## Getting Started

Clone the repository and install the dependencies.

```
$ git clone --depth=1 git@github.com:benfo/taskerjs-starter.git
$ cd taskerjs-starter
$ npm install
```

Before deploying the application to your phone, make sure you have installed and correctly configured [adb](https://developer.android.com/studio/releases/platform-tools) to communicate with your phone.

```
$ npm run push
```

Now it is time to configure Tasker.

**Add a Task**

- Launch Tasker and add a new Task called _TaskerJs_.
- Add a JavaScript action and set the `Path` field to point to the `index.js` file. Locate the file using the magnifying glass button or type `Tasker/scripts/taskerjs-starter/index.js`.

**Add a Profile**

- Add a new _State_ profile and search for _Power_. Keep the default settings.
- For the _Enter Task_, select _TaskerJs_ from the list of tasks.
- Rename the profile to "Power:Changed".

**Test**

You can now test the profile.

Plug your phone into a power source to see the message "Hello World" flash on your screen.
