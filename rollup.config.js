import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { string } from 'rollup-plugin-string';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default [{
    input: 'src/index.js',
    output: {
        file: 'public/bundle.js',
        format: 'iife',
        globals: {
            angular: 'angular'
        }
    },
    external: ['angular'],
    plugins: [
        string({
            include: '**/*.html'
        }),
        commonjs(),
        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload('public'),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ],
    watch: {
        include: './src/**',
        exclude: './src/libs.js',
        clearScreen: false
    },
}, {
    input: 'src/libs.js',
    output: {
        file: 'public/vendor.js',
        format: 'iife',
        name: 'angular'
    },
    plugins: [
        resolve({
            browser: true,
            preferBuiltins: false,
        }),
        commonjs(),
      
    ],
    watch: {
        include: './src/libs.js',
        clearScreen: false
    },
}];
function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	
};
}

