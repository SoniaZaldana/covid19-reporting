#!/bin/bash

#install xcode
xcode-select --install

#install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

#install docker (and accept terms and conditions)
brew install --cask docker
open /Applications/Docker.app
