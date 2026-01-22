-- You can add your own plugins here or in other files in this directory!
--  I promise not to create any merge conflicts in this directory :)
--
-- See the kickstart.nvim README for more information
return {

    { "preservim/nerdtree" },
    {
        'stevearc/oil.nvim',
        opts = {},
        dependencies = { { 'echasnovski/mini.icons', ops = {} } },
        lazy = false,

        config = function()
            require('oil').setup {
                default_file_explorer = true,
                columns = {
                    'icon',
                },
                keymaps = {
                    ['<leader>o'] = { 'Oil' },
                },
            }
        end,
    },
    {
        "akinsho/toggleterm.nvim",
        version = "*", -- Use for stability; omit to use `main` branch for the latest features
        config = true,
    },
    
}
