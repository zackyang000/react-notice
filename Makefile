.PHONY: build compile test

default: build

build: test compile

compile:
	node_modules/babel/bin/babel.js src --out-dir build

test:
	node_modules/.bin/eslint src
