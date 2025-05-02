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
vim.keymap.set('n', '<leader>ff', '<Cmd>Neotree position=right<CR>', { silent = true })
vim.keymap.set('n', '<leader>fb', '<Cmd>Neotree toggle show buffers left<CR>', { silent = true })
-- NerdTree
vim.keymap.set({ 'n', 'i' }, '<C-t>', '<Cmd>NERDTreeToggle<CR>', { desc = "Toggle NerdTree" })

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

-- Keymaps to navigate tabs
vim.keymap.set('n', '<Tab>', '<Cmd>tabnext<CR>', { silent = true })
vim.keymap.set('n', '<S-Tab>', '<Cmd>tabprevious<CR>', { silent = true })

-- Keymaps to open terminal
vim.keymap.set('n', '<leader>t', '<Cmd>ToggleTerm size=10 direction=horizontal<CR>',
  { desc = "Toggle Horizontal Terminal" })
vim.keymap.set('n', '<leader>tt', '<Cmd>ToggleTerm size=10 direction=tab<CR>', { desc = "Toggle Tab Terminal" })
vim.keymap.set('n', '<leader>tf', '<Cmd>ToggleTerm size=10 direction=float<CR>', { desc = "Toggle Float Terminal" })
vim.keymap.set('n', '<leader>tn', '<Cmd>lua _NODE_TOGGLE()<CR>', { desc = "Toggle Node Terminal" })
vim.keymap.set('n', '<leader>tp', '<Cmd>lua _PYTHON_TOGGLE()<CR>', { desc = "Toggle Python Terminal" })
vim.keymap.set('n', '<leader>th', '<Cmd>lua _BTOP_TOGGLE()<CR>', { desc = "Toggle btop Terminal" })
vim.keymap.set('n', '<leader>tl', '<Cmd>lua _LAZYGIT_TOGGLE()<CR>', { desc = "Toggle Lazygit Terminal" })
vim.keymap.set('n', '<leader>ts', '<Cmd>lua _LIVE_SERVER_TOGGLE()<CR>', { desc = "Toggle Live Server Terminal" })


-- Keymaps for Harpoon
local harpoon = require("harpoon")

-- REQUIRED
harpoon:setup()
-- REQUIRED

vim.keymap.set("n", "<leader>ha", function() harpoon:list():add() end, { desc = 'Add file to harpoon' })
vim.keymap.set("n", "<leader>hm", function() harpoon.ui:toggle_quick_menu(harpoon:list()) end,
  { desc = 'List harpooned files' })

vim.keymap.set("n", "<leader>1", function() harpoon:list():select(1) end)
vim.keymap.set("n", "<leader>2", function() harpoon:list():select(2) end)
vim.keymap.set("n", "<leader>3", function() harpoon:list():select(3) end)
vim.keymap.set("n", "<leader>4", function() harpoon:list():select(4) end)

--
-- CodeCompanion keys
vim.keymap.set("n", "<leader>cp", "<Cmd>CodeCompanion<CR>", { desc = "CodeCompanion Prompt" })

-- Copilot keys
vim.keymap.set("n", "<leader>cc", "<Cmd>CopilotChat<CR>", { desc = "Copilot Chat" })
