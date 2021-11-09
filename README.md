# Parajuniper Project: COVID-19 Reporting Tool
This is the repository for Parajuniper Project 4 which requires that we convert an XML-based
COVID-19 CDC reporting form to JSON, render it in a UI, and submit it as a FHIR message to an
existing FHIR Server.

## Meeting Minutes and Development Plan

You can find the meeting minutes for all of our meetings in the `meeting_minutes` folder. Additionally, you can find our development plan and tech stack discussion in `A1.md` in the parent directory.

You can also find a description of our features with subtasks in `A2.md` in the parent directory. 

## Installing the Development Environment
If you are running Ubuntu, run the following command to install the development environment:
```
./scripts/ubuntu_install_dev_env.sh
```

If you are running macOS, run the following command to install the development environment:
```
./scripts/mac_install_dev_env.sh
```
Docker will open. Accept the terms and conditions and close the application.

## Building
Run the following command to build the application:
```
./scripts/build.sh
```

Go to `http://localhost:3000` in the host machine to view the application.

## Testing
Run the following command to test the application:
```
./scripts/test.sh
```
Note that the tests will fail and this is expected because there are no tests written yet. As discussed with the client, there is no testing component for this milestone.
Make sure the container from the build above is still running when you run this script.

## Best Practices for Development
- Before working on a task, pull the latest updates from the `develop` branch
- To work on a task, create a branch off of `develop` and do all your work in that branch
- When you are completed your task and ready to merge it into `develop`, create a pull request and request review from everybody in the group
- Once the pull request has gotten at least one approval, you can squash and merge it into the `develop` branch
- The `main` branch should only be updated with the `develop` branch when enough work has been done in the `develop` branch to warrant a new release