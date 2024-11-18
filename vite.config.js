import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import * as glob from 'glob';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        [react()],
        laravel({
            input: [...glob.sync('resources/css/**/*.css'), ...glob.sync('resources/js/**/*.js'),...glob.sync('resources/jsx/**/*.jsx')],
            refresh: true,
        }),

    ],
});
