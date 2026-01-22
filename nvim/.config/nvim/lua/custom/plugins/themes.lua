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
        config = function()
            ---@diagnostic disable-next-line: missing-fields
            require('tokyonight').setup {
                styles = {
                    comments = { italic = false }, -- Disable italics in comments
                },
            }
            -- Load the colorscheme here.
            -- Like many other themes, this one has different styles, and you could load
            -- any other, such as 'tokyonight-storm', 'tokyonight-moon', or 'tokyonight-day'.
            vim.cmd.colorscheme 'tokyonight-night'
        end
    },
    {
        "catppuccin/nvim",
        name = "catppuccin",
        priority = 1000,
        config = function()
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
    },
    {
        "craftzdog/solarized-osaka.nvim",
        lazy = false,
        priority = 1000,
        opts = {},
        config = function()
            require("solarized-osaka").setup({
                transparent = false
            })
        end
    }
}