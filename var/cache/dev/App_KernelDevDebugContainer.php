<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerUlLVeQS\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerUlLVeQS/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerUlLVeQS.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerUlLVeQS\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerUlLVeQS\App_KernelDevDebugContainer([
    'container.build_hash' => 'UlLVeQS',
    'container.build_id' => 'b02175b9',
    'container.build_time' => 1682166022,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerUlLVeQS');
