<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerD9n5hlG\srcApp_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerD9n5hlG/srcApp_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerD9n5hlG.legacy');

    return;
}

if (!\class_exists(srcApp_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerD9n5hlG\srcApp_KernelDevDebugContainer::class, srcApp_KernelDevDebugContainer::class, false);
}

return new \ContainerD9n5hlG\srcApp_KernelDevDebugContainer([
    'container.build_hash' => 'D9n5hlG',
    'container.build_id' => 'a9ad5d01',
    'container.build_time' => 1597862999,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerD9n5hlG');
