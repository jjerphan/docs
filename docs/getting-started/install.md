---
sidebar_position: 1
id: install
title: Installation
---


## UNIX install

To install Flojoy on *NIX systems, there are a few prequisites needed on your machine. 
- Python
  - A suitable python installation with `pip`. It may be worthwhile to create a virtual environment to use with Flojoy to ensure cross-module compatibility.
- Node
  - `Nodejs` is required to run the primary application. You can see the installation instructions for `Nodejs` [here](https://nodejs.org/en/download/package-manager/).
- Redis
  - Redis is an open-source, in-memory data store used by Flojoy. It can be installed by the instructions [here](https://redis.io/docs/getting-started/installation/).

To install Flojoy on UNIX:

1. [Clone the repo](https://github.com/flojoy-io/flojoy-desktop)
2. `cd` into the project root
3. Install the required python packages: `python3 -m pip install -U -r requirements.txt`
4. Install Javascript packages with the native package manager: `npm install`
5. Run `$ sh mac_startup.sh` (Flojoy does not run on Windows yet)

   - If you have a virtual environment installed, you can provide the path to the folder of the venv as `sh mac_start_up.sh -v venv`
     - You can provide optional argument `-r` which will shut down the existing redis server and spin up a fresh one
