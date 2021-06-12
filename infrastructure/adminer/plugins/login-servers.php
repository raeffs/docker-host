<?php
require_once('plugins/login-servers.php');

$mapToServers = function($serverList, $driver) {

  $mapToServer = function($server) use($driver) {
      return [
          'server' => $server,
          'driver' => $driver
      ];
  };

  $servers = explode(',', $serverList);
  $temp = array_map($mapToServer, $servers);
  $result = array_column($temp, null, 'server');
  return $result;

};

$mySqlServers = $mapToServers($_ENV['MYSQL_SERVERS'], 'server');

return  new AdminerLoginServers(
  array_merge($mySqlServers)
);
