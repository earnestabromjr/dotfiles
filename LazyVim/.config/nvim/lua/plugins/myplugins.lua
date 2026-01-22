return {
  --add OneDark theme
  {
    "navarasu/onedark.nvim",
    lazy = false,
    priority = 1000,
    config = function()
      require("onedark").setup({
        style = "darker",
        transparent = true,
        term_colors = true,
      })
      -- require("onedark").load()
    end,
  },
  {
    "rebelot/kanagawa.nvim",
  },

  {
    "LazyVim/LazyVim",
    opts = {
      colorscheme = "cyberdream",
    },
  },
  {
    "nvim-mini/mini.surround",
    version = false, -- Use the main branch
  },
}
