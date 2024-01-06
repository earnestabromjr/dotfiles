return {
	'rose-pine/neovim',
	priority = 1000,
	name = "rose-pine",
	variant = "main",
	config = function()
		vim.cmd.colorscheme('rose-pine')
	end
}
