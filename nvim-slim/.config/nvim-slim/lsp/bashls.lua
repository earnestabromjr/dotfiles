return {
	cmd = { "bash-language-server", "start" },
	filetypes = { "sh", "zsh", "bash" },
	root_markers = { ".git", ".bashrc", ".bash_profile", ".bashrc", ".zshrc" },
	settings = {
		bashIde = {
			globPattern = "*@(.sh|.inc|.bash|.command)",
		},
	},
}
