vim.pack.add("https://github.com/scottmckendry/cyberdream.nvim")

require("cyberdream").setup({
	transparent = true,
	extensions = {
		base = true,
	},
})

vim.cmd("colorscheme cyberdream")
