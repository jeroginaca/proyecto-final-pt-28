#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm run build
pip install --upgrade pip
pip install -r requirements.txt