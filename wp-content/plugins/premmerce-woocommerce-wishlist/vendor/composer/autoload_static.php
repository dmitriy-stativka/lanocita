<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit6a2ef67daa3d124c8d2d25888f67cc14
{
    public static $files = array (
        '9f99fa704ab7880f69ed1f5fc1dda381' => __DIR__ . '/../..' . '/functions.php',
    );

    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Premmerce\\Wishlist\\' => 19,
            'Premmerce\\SDK\\' => 14,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Premmerce\\Wishlist\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Premmerce\\SDK\\' => 
        array (
            0 => __DIR__ . '/..' . '/premmerce/wordpress-sdk/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit6a2ef67daa3d124c8d2d25888f67cc14::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit6a2ef67daa3d124c8d2d25888f67cc14::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit6a2ef67daa3d124c8d2d25888f67cc14::$classMap;

        }, null, ClassLoader::class);
    }
}
