# Parajuniper Project: COVID-19 Reporting Tool
This is the repository for Parajuniper Project 4 which requires that we convert an XML-based 
COVID-19 CDC reporting form to JSON, render it in a UI, and submit it as a FHIR message to an 
existing FHIR Server.

## Installing the Development Environment
If you are running Ubuntu, run the following command to install the development environment:
```
./scripts/ubuntu_install_dev_env.sh
```

If you are running macOS, run the following command to install the development environment:

## Building
Run the following command to build the application:
```
./scripts/build.sh
```

Go to `localhost:3000` in the host machine to view the application.

## Testing
Run the following command to test the application:
```
./scripts/test.sh
```