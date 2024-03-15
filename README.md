# python-current-file-as-module README
Just add a simple command: currentFileAsModuleName that returns a relative dot path that from `module_root`, or `cwd`(if there is no `module_root`), or `${WorkspaceFolder}`(if there is no `cwd`).

Add an Entry to launch.json like that and then you are free to go:
```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
         "name": "Python: Module",
            "type": "python",
            "request": "launch",
            "module": "${command:python-current-file-as-module.currentFileAsModuleName}",
            "cwd": "${workspaceFolder}/src", //can also use module_root
            "justMyCode": true
        }
    ]
}
```

then we get:
```
cd /home/user1/vscode-ext-test/src ; /usr/bin/env /bin/python3 /home/user1/.vscode-server/extensions/ms-python.python-2023.18.0/pythonFiles/lib/python/debugpy/adapter/../../debugpy/launcher 47207 -- -m hello
Hello World!
```


## Features

## Release Notes

### 1.0.0

Initial release. 

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)