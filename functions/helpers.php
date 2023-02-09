<?php

if (!function_exists('base_path')) {
    /**
     * Get the base path of the Pimcore installation.
     *
     * @param string $path
     * @return string
     */
    function base_path(string $path = ''): string
    {
        return dirname(__DIR__).($path != '' ? DIRECTORY_SEPARATOR.ltrim($path, '\\/') : '');
    }
}
