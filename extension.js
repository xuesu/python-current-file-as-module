// The module 'vscode' contains the VS Code extensibility API

// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require('path');
const extension_name = "python-current-file-as-module";
const command_name = "currentFileAsModuleName";


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log(extension_name + " is activated!");
	let command_full_name = extension_name + "." + command_name;
	let disposable = vscode.commands.registerCommand(command_full_name, function (launch_settings) {
		const textEditor = vscode.window.activeTextEditor;
		if (!textEditor.document.uri.path.endsWith(".py")) {
			vscode.window.showErrorMessage("Please open a python file in " + command_full_name);
			return textEditor.document.uri.path;
		}
		let root_dir = "";
		if ("module_root" in launch_settings) {
			root_dir = launch_settings.module_root;
		}
		else if ("cwd" in launch_settings) {
			root_dir = launch_settings.cwd;
		}
		else {
			root_dir = launch_settings.workspaceFolder;
		}

		let rel_dir = path.relative(root_dir, textEditor.document.uri.path).replaceAll(path.sep, ".");
		rel_dir = rel_dir.substring(0, rel_dir.length - 3);
		return rel_dir;
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {
	console.log(extension_name + " is deactivated!");
}

module.exports = {
	activate,
	deactivate
}
