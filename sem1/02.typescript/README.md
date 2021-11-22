# Angular Developer
TypeScript workshop

## Env setup
### Install TypeScript
```bash
$ npm install -g typescript
```
### Verify that ts was installed properly
```bash
$ tsc -v
```
Expected output:
```bash
[chrystian@chrum tasks]$ tsc
Version 4.5.2
Syntax:   tsc [options] [file...]

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt
          tsc --build tsconfig.json

Options:
 -h, --help                                         Print this message.
...
```
If you see something like that then we have a go.

## How to work with tasks
* Go to directory with the task (first task for example)
```
$ cd 1
```
* Run TypeScript compiler
```
$ tsc
```
* Check errors in the console and fix them, rerun TypeScript compiler

## Goal
Make TypeScript Compiler (tsc) happy - compilation should not report any errors

**IMPORTANT!**
There might be additional tasks/instructions in each task

