return {
	{
		"HiPhish/rainbow-delimiters.nvim",
	},
	{
		"stevearc/oil.nvim",
		---@module 'oil'
		---@type oil.SetupOpts
		opts = {},
		-- Optional dependencies
		dependencies = { { "nvim-mini/mini.icons", opts = {} } },
		-- dependencies = { "nvim-tree/nvim-web-devicons" }, -- use if you prefer nvim-web-devicons
		-- Lazy loading is not recommended because it is very tricky to make it work correctly in all situations.
		lazy = false,
	},
	{
		"uhs-robert/sshfs.nvim",
		opts = {
			-- Refer to the configuration section below
			-- or leave empty for defaults
		},
	},
}
