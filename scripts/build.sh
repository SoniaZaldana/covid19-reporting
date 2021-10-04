#!/bin/bash

sudo docker build -t reporting-tool:latest .
sudo docker run -p 3000:3000 --name covid19-reporting-tool reporting-tool:latest