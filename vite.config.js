import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import * as glob from 'glob';

export default defineConfig({
    plugins: [
        [react()],
        laravel({
            input: [...glob.sync('resources/css/**/*.css'), ...glob.sync('resources/js/**/*.js'),...glob.sync('resources/jsx/**/*.jsx')],
            refresh: true,
        }),
    ],
});
