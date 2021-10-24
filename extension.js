const vscode = require('vscode');

//
// Helper Functions
//



//
// Extension Commands
//

function addSnippet() {
	vscode.window.showInformationMessage('Add snippet');
}

function editSnippets() {
	vscode.window.showInformationMessage('Edit snippets');
}

//
// Basic Extension Functions
//

function activate(context) {
	// Implement activationEvents here, defined in package.json
	// activationEvents can have keyboard shortcuts, and commands show up in the command palette
	context.subscriptions.push(vscode.commands.registerCommand('betterSnippets.addSnippet', addSnippet));
	context.subscriptions.push(vscode.commands.registerCommand('betterSnippets.editSnippets', editSnippets));
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
