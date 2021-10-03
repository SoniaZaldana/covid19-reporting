#!/bin/bash

#install xcode
xcode-select --install

#install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

#install docker
brew install --cask docker
