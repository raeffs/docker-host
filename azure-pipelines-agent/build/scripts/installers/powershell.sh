#!/bin/bash
################################################################################
##  File:  powershell.sh
##  Team:  CI-Platform
##  Desc:  Installs pwsh
################################################################################

# Source the helpers for use with the script
source $HELPER_SCRIPTS/document.sh

# Install pwsh
apt-get update -y
add-apt-repository universe
apt-get install -y powershell

# Run tests to determine that the software installed as expected
echo "Testing to make sure that script performed as expected, and basic scenarios work"
if ! command -v pwsh; then
    echo "pwsh was not installed"
    exit 1
fi

# Document what was added to the image
echo "Lastly, documenting what we added to the metadata file"
DocumentInstalledItem "pwsh"
