return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        bashls = {},
        clangd = {},
        cssls = {},
        dockerls = {},
        gopls = {},
        html = {
          embedde_languages = {
            css = true,
            javascript = true,
            typescript = true,
          },
          provideFormatter = true,
        },
        jsonls = {},
        pyright = {},
        rust_analyzer = {},
        tsserver = {},
        yamlls = {
          settings = {
            yaml = {
              schemas = {
                ["https://raw.githubusercontent.com/SchemaStore/schemastore/master/src/schemas/json/github-workflow.json"] = ".github/workflows/*",
              },
            },
          },
        },
      },
    },
  },
}
