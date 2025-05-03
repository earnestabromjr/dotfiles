return {
	{
		'navarasu/onedark.nvim',
		priority = 1000,
		name = "onedark",
		style = 'deep',
	},
	{
		'olimorris/onedarkpro.nvim',
		priority = 1000,
		config = function()
			vim.cmd.colorscheme('onedark_dark')
		end
	},
	{
		"folke/tokyonight.nvim",
		lazy = false,
		priority = 1000,
		opts = {},
	},
	{
		"catppuccin/nvim",
		name = "catppuccin",
		priority = 1000,
	},

}
