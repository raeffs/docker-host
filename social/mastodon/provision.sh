#!/bin/bash

FILE=/mastodon/public/system/provisioned

if [ -f "$FILE" ]; then
    echo "$FILE exists, provisioning not required"
else 
    echo "$FILE does not exist, provisioning mastodon"

    bundle exec rake db:setup
    bin/tootctl accounts create $MASTODON_ADMIN_USERNAME --email $MASTODON_ADMIN_EMAIL --confirmed --role admin

    echo "provisioning done"
    touch "$FILE"
fi
