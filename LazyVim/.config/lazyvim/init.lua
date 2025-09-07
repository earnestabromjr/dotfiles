-- bootstrap lazy.nvim, LazyVim and your plugins
require("config.lazy")
require("oil").setup()
require("lspconfig").stylelint_lsp.setup({
    filetypes = { "css", "scss", "less" },
    settings = {
        stylelintplus = {
            autoFixOnSave = true,
            autoFixOnFormat = true,
        },
    },
})
