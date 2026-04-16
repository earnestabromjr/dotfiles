vim.pack.add({
	"https://github.com/yorickpeterse/nvim-jump",
})

require("jump").setup()

-- stylua: ignore start
vim.keymap.set({ 'n', 'x', 'o' }, 's', require('jump').start, {})
-- stylua: ignore end
