-- [[ Basic Keymaps ]]

-- Keymaps for better default experience
-- See `:help vim.keymap.set()`
vim.keymap.set({ 'n', 'v' }, '<Space>', '<Nop>', { silent = true })

-- Remap for dealing with word wrap
vim.keymap.set('n', 'k', "v:count == 0 ? 'gk' : 'k'", { expr = true, silent = true })
vim.keymap.set('n', 'j', "v:count == 0 ? 'gj' : 'j'", { expr = true, silent = true })

-- Diagnostic keymaps
vim.keymap.set('n', '[d', vim.diagnostic.goto_prev, { desc = 'Go to previous diagnostic message' })
vim.keymap.set('n', ']d', vim.diagnostic.goto_next, { desc = 'Go to next diagnostic message' })
vim.keymap.set('n', '<leader>e', vim.diagnostic.open_float, { desc = 'Open floating diagnostic message' })
vim.keymap.set('n', '<leader>q', vim.diagnostic.setloclist, { desc = 'Open diagnostics list' })

-- [[ Highlight on yank ]]
-- See `:help vim.highlight.on_yank()`
local highlight_group = vim.api.nvim_create_augroup('YankHighlight', { clear = true })
vim.api.nvim_create_autocmd('TextYankPost', {
  callback = function()
    vim.highlight.on_yank()
  end,
  group = highlight_group,
  pattern = '*',
})

-- vim: ts=2 sts=2 sw=2 et

-- Personal keymaps
vim.keymap.set('i', 'jj', '<Esc>', { silent = true })
vim.keymap.set('v', 'jj', '<Esc>', { silent = true })
-- Keymap to launch neotree
vim.keymap.set('n', '<leader>t', '<Cmd>Neotree<CR>', { silent = true })
vim.keymap.set('n', '<leader>tb', '<Cmd>Neotree toggle show buffers left<CR>', { silent = true })

-- Keymap to write and quit files
vim.keymap.set('n', '<leader>fw', '<Cmd>write<CR>', { desc = 'Save file' })
vim.keymap.set('n', '<leader>fq', '<Cmd>quit<CR>', { desc = 'Quit' })

--Keymaps to navigate windows
vim.keymap.set('n', '<leader>j', '<C-w>w', { silent = true })
vim.keymap.set('n', '<leader>k', '<C-w>p', { silent = true })

--Keymaps to resize windows

vim.keymap.set('n', '<leader><Left>', '<C-w><', { silent = true })
vim.keymap.set('n', '<leader><Right>', '<C-w>>', { silent = true })
vim.keymap.set('n', '<leader><Up>', '<C-w>+', { silent = true })
vim.keymap.set('n', '<leader><Down>', '<C-w>-', { silent = true })

-- Keymaps to navigate buffers
vim.keymap.set('n', '<leader>bb', '<Cmd>bp<CR>', { silent = true })
vim.keymap.set('n', '<leader>bn', '<Cmd>bn<CR>', { silent = true })
vim.keymap.set('n', '<leader>bl', '<Cmd>ls<CR>', { silent = true })
vim.keymap.set('n', '<leader>bd', '<Cmd>bd<CR>', { silent = true })

-- Keymaps to open terminal
vim.keymap.set('n', '<leader>T', '<Cmd>terminal<CR>')


-- Keymaps for Harpoon
local harpoon = require("harpoon")

-- REQUIRED
harpoon:setup()
-- REQUIRED

vim.keymap.set("n", "<leader>la", function() harpoon:list():append() end, { desc = 'Add file to harpoon' })
vim.keymap.set("n", "<leader>h", function() harpoon.ui:toggle_quick_menu(harpoon:list()) end,
  { desc = 'List harpooned files' })

vim.keymap.set("n", "<leader>1", function() harpoon:list():select(1) end)
vim.keymap.set("n", "<leader>2", function() harpoon:list():select(2) end)
vim.keymap.set("n", "<leader>3", function() harpoon:list():select(3) end)
vim.keymap.set("n", "<leader>4", function() harpoon:list():select(4) end)
