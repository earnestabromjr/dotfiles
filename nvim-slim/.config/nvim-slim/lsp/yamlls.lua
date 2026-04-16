return {
	cmd = { "yaml-language-server", "--stdio" },
	filetypes = { "yaml", "yaml.gitlab", "yaml.helm-values" },
	root_markers = { ".git", ".yaml", ".yml" },
	settings = {
		yaml = {
			schemastore = { enable = false, url = "" },
			format = { enable = true },
		},
	},
}
