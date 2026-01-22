-- Anakins Keymaps

-- Keymaps to navigate buffers
<<<<<<< Updated upstream
vim.keymap.set('n', '<space>bb', '<Cmd>bp<CR>', { silent = true })
vim.keymap.set('n', '<space>bn', '<Cmd>bn<CR>', { silent = true })
=======
vim.keymap.set('n', '<Shift>h', '<Cmd>bp<CR>', { silent = true })
vim.keymap.set('n', '<Shift>l', '<Cmd>bn<CR>', { silent = true })
>>>>>>> Stashed changes
vim.keymap.set('n', '<leader>bl', '<Cmd>ls<CR>', { silent = true })
vim.keymap.set('n', '<leader>bd', '<Cmd>bd<CR>', { silent = true })

-- Keymaps for file navigation
vim.keymap.set('n', '<leader>o', '<Cmd>Oil<CR>', { desc = 'Oil' })

-- Personal keymaps
vim.keymap.set('i', 'jk', '<Esc>', { silent = true })
vim.keymap.set('v', 'jk', '<Esc>', { silent = true })
-- Keymap to launch neotree
<<<<<<< Updated upstream
vim.keymap.set('n', '<leader>e', '<Cmd>Neotree position=right<CR>', { desc = 'Toggle neoTree' })
vim.keymap.set('n', '<leader>eb', '<Cmd>Neotree toggle show buffers left<CR>', { desc = 'Toggle neoTree buffer list' })
-- NerdTree
vim.keymap.set({ 'n', 'i' }, '<C-t>', '<Cmd>NERDTreeToggle<CR>', { desc = 'Toggle NerdTree' })
=======
vim.keymap.set('n', '<leader>e', '<Cmd>Neotree position=right<CR>', { des = 'Neo Tree' })
vim.keymap.set('n', '<leader>fb', '<Cmd>Neotree toggle show buffers left<CR>', { silent = true })
-- NerdTree
vim.keymap.set({ 'n', 'i' }, '<C-t>', '<Cmd>NERDTreeToggle<CR>', { desc = 'Toggle NerdTree' })

--Keymaps to navigate windows
vim.keymap.set('n', '<leader>j', '<C-w>w', { silent = true })
vim.keymap.set('n', '<leader>k', '<C-w>p', { silent = true })
>>>>>>> Stashed changes

--Keymaps to resize windows

vim.keymap.set('n', '<leader><Left>', '<C-w><', { desc = 'Grow window to left' })
vim.keymap.set('n', '<leader><Right>', '<C-w>>', { desc = 'Grow window to right' })
vim.keymap.set('n', '<leader><Up>', '<C-w>+', { desc = 'Grow window up' })
vim.keymap.set('n', '<leader><Down>', '<C-w>-', { desc = 'Grow window down' })

-- Keymaps to navigate tabs
vim.keymap.set('n', '<Tab>', '<Cmd>tabnext<CR>', { silent = true })
vim.keymap.set('n', '<S-Tab>', '<Cmd>tabprevious<CR>', { silent = true })

-- Keymaps to open terminal
vim.keymap.set('n', '<leader>t', '<Cmd>ToggleTerm size=10 direction=horizontal<CR>', { desc = 'Toggle Horizontal Terminal' })
vim.keymap.set('n', '<leader>tt', '<Cmd>ToggleTerm size=10 direction=tab<CR>', { desc = 'Toggle Tab Terminal' })
vim.keymap.set('n', '<leader>tf', '<Cmd>ToggleTerm size=10 direction=float<CR>', { desc = 'Toggle Float Terminal' })
vim.keymap.set('n', '<leader>tn', '<Cmd>lua _NODE_TOGGLE()<CR>', { desc = 'Toggle Node Terminal' })
vim.keymap.set('n', '<leader>tp', '<Cmd>lua _PYTHON_TOGGLE()<CR>', { desc = 'Toggle Python Terminal' })
vim.keymap.set('n', '<leader>th', '<Cmd>lua _BTOP_TOGGLE()<CR>', { desc = 'Toggle btop Terminal' })
vim.keymap.set('n', '<leader>tl', '<Cmd>lua _LAZYGIT_TOGGLE()<CR>', { desc = 'Toggle Lazygit Terminal' })
vim.keymap.set('n', '<leader>ts', '<Cmd>lua _LIVE_SERVER_TOGGLE()<CR>', { desc = 'Toggle Live Server Terminal' })

-- Keymaps for Harpoon
local harpoon = require 'harpoon'

-- REQUIRED
harpoon:setup()
-- REQUIRED

vim.keymap.set('n', '<leader>ha', function()
  harpoon:list():add()
end, { desc = 'Add file to harpoon' })
vim.keymap.set('n', '<leader>hm', function()
  harpoon.ui:toggle_quick_menu(harpoon:list())
end, { desc = 'List harpooned files' })

vim.keymap.set('n', '<leader>1', function()
  harpoon:list():select(1)
end)
vim.keymap.set('n', '<leader>2', function()
  harpoon:list():select(2)
end)
vim.keymap.set('n', '<leader>3', function()
  harpoon:list():select(3)
end)
vim.keymap.set('n', '<leader>4', function()
  harpoon:list():select(4)
end)
vim.keymap.set('n', '<leader>5', function()
  harpoon:list():select(5)
end)
vim.keymap.set('n', '<leader>6', function()
  harpoon:list():select(6)
end)
vim.keymap.set('n', '<leader>7', function()
  harpoon:list():select(7)
end)
vim.keymap.set('n', '<leader>8', function()
  harpoon:list():select(8)
end)
vim.keymap.set('n', '<leader>9', function()
  harpoon:list():select(9)
end)
vim.keymap.set('n', '<leader>0', function()
  harpoon:list():select(0)
end)

--
-- CodeCompanion keys
vim.keymap.set('n', '<leader>cp', '<Cmd>CodeCompanion<CR>', { desc = 'CodeCompanion Prompt' })

-- Copilot keys
vim.keymap.set('n', '<leader>cc', '<Cmd>CopilotChat<CR>', { desc = 'Copilot Chat' })
