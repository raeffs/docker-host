#!/bin/sh

/var/www/wallabag/bin/console --env=prod wallabag:user:show ${WALLABAG_INITIAL_USER}
EXITCODE=$?

if [ $EXITCODE -eq 0 ]; then
    echo 'Initial user already exists'
else
    echo 'Creating initial user'
    /var/www/wallabag/bin/console --env=prod fos:user:create ${WALLABAG_INITIAL_USER} ${WALLABAG_INITIAL_USER}@wallabag.io ${WALLABAG_INITIAL_PASSWORD} --super-admin
fi
