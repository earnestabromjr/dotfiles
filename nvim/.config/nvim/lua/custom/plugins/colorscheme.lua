return {
	{
		'navarasu/onedark.nvim',
		priority = 1000,
		name = "onedark",
		style = 'deep',
	},
	{
		"folke/tokyonight.nvim",
		lazy = false,
		priority = 1000,
		opts = {},
		config = function()
			vim.cmd.colorscheme('tokyonight-night')
		end
	},
	{
		"catppuccin/nvim",
		name = "catppuccin",
		priority = 1000,
	},

}
