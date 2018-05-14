#!/bin/bash

git subtree push --prefix dist origin gh-pages
# git push gh-pages `git subtree split --prefix dist master`:production --force
