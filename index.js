const core = require('@actions/core');
const github = require('@actions/github');

try {
    // 'who-to-greet' input defined in action metadata file
    const nameToGree = core.getInput('who-to-greet');
    console.log('Hello ${nameToGreet}!');
    const time = (new Date()).toTimeString();
    core.setOutput('time', time);
    // Get the JSON webhook payload for the event tha triggered the workflow
    const payload = JSON.stringify(githu.context.playload, undefined, 2);
} catch (error) {
    core.setFailed(error.message);
}