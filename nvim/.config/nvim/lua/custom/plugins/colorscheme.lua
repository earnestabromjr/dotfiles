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
        config = function()
            vim.cmd.colorscheme("catppuccin-mocha")
        end
    },
    {
        "scottmckendry/cyberdream.nvim",
        lazy = false,
        priority = 1000,
        config = function()
            require("cyberdream").setup({
                transparent = true,
                terminal_colors = true,
            })
        end
    }
}
