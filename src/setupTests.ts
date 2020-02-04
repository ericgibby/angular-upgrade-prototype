// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import fs from 'fs';
import path from 'path';
import './vendor';
import 'angular-mocks';

// Load module files
walkDirectory('src/', [], /\.module\.js$/).forEach(f => importFile(f, /^src/, '.'));
window.angular.module('app.templates', []);

// Load other source files
walkDirectory('src/', [], /^(?!.*\.(test|spec|mock|module)\.js$).*\.js$/).forEach(f => {
	if (f !== 'src/index.js') {
		importFile(f, /^src/, '.');
	}
});

function importFile(file: string, replaceExp: RegExp, replaceValue: string = '') {
	const f = replaceExp ? file.replace(replaceExp, replaceValue) : file;
	require(f);
}

function walkDirectory(dir: string, files: string[] = [], regex: RegExp = /.+\.([tj]s[x])?$/): string[] {
	let dirContent = fs
		.readdirSync(dir, { withFileTypes: true })
		.map(f => Object.assign(f, { name: path.join(dir, f.name) }));
	const dirDirectories = dirContent.filter(f => f.isDirectory());
	const dirFiles = dirContent.filter(f => !f.isDirectory() && regex.test(f.name)).map(f => f.name);
	const subDirFiles = dirDirectories.reduce((accumulator, d) => {
		const subDirDirFiles = walkDirectory(d.name, [], regex);
		return accumulator.concat(subDirDirFiles);
	}, []);
	return files.concat(dirFiles, subDirFiles);
}
