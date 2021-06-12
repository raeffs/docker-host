<?php
require_once('plugins/database-hide.php');

return new AdminerDatabaseHide([
  'information_schema',
  'mysql',
  'performance_schema'
]);
