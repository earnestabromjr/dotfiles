return {
	{
		"HiPhish/rainbow-delimiters.nvim",
	},
  {
    "alexpasmantier/tv.nvim",
    config = function()
      local h = require('tv').handlers
      require("tv").setup{
        channels = {
          files = {
            keybinding = '<C-p>',
            handlers = {
                  ['<CR>'] = h.open_as_files,         -- default: open selected files
                  ['<C-q>'] = h.send_to_quickfix,     -- send to quickfix list
                  ['<C-s>'] = h.open_in_split,       -- open in horizontal split
                  ['<C-v>'] = h.open_in_vsplit,      -- open in vertical split
                  ['<C-y>'] = h.copy_to_clipboard,   -- copy paths to clipboard
            },
          },
        }
      }
    end,
  }
}
