<?php

namespace ContainerLZxZge2;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getDoctrine_Dbal_DefaultConnectionService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'doctrine.dbal.default_connection' shared service.
     *
     * @return \Doctrine\DBAL\Connection
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/dbal/src/Connection.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/doctrine-bundle/ConnectionFactory.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/dbal/src/Configuration.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/dbal/src/Schema/SchemaManagerFactory.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/dbal/src/Schema/LegacySchemaManagerFactory.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/dbal/src/Driver/Middleware.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/doctrine-bundle/Middleware/ConnectionNameAwareInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/doctrine-bundle/Middleware/DebugMiddleware.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/event-manager/src/EventManager.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/doctrine-bridge/ContainerAwareEventManager.php';

        $a = new \Doctrine\DBAL\Configuration();

        $b = new \Doctrine\Bundle\DoctrineBundle\Middleware\DebugMiddleware(($container->privates['doctrine.debug_data_holder'] ??= new \Doctrine\Bundle\DoctrineBundle\Middleware\BacktraceDebugDataHolder([])), ($container->privates['debug.stopwatch'] ??= new \Symfony\Component\Stopwatch\Stopwatch(true)));
        $b->setConnectionName('default');

        $a->setSchemaManagerFactory(new \Doctrine\DBAL\Schema\LegacySchemaManagerFactory());
        $a->setMiddlewares([0 => $b]);

        return $container->services['doctrine.dbal.default_connection'] = (new \Doctrine\Bundle\DoctrineBundle\ConnectionFactory([]))->createConnection(['url' => $container->getEnv('resolve:DATABASE_URL'), 'driver' => 'pdo_mysql', 'host' => 'localhost', 'port' => NULL, 'user' => 'root', 'password' => NULL, 'driverOptions' => [], 'defaultTableOptions' => []], $a, new \Symfony\Bridge\Doctrine\ContainerAwareEventManager($container), []);
    }
}
