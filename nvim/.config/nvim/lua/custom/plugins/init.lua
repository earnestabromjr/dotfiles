-- You can add your own plugins here or in other files in this directory!
--  I promise not to create any merge conflicts in this directory :)
--
-- See the kickstart.nvim README for more information
return {
	{ 'echasnovski/mini.icons', version = false },
	{ 'preservim/nerdtree' },
	{ 'ryanoasis/vim-devicons' },
	{
		'stevearc/conform.nvim',
		opt = {},
		config = function()
			require('conform').setup({
				formatters_by_ft = {
					javascript = { 'prettier' },
					javascriptreact = { 'prettier' },
					typescript = { 'prettier' },
					typescriptreact = { 'prettier' },
					json = { 'prettier' },
					yaml = { 'prettier' },
					html = { 'prettier' },
					css = { 'prettier' },
					scss = { 'prettier' },
					less = { 'prettier' },
					md = { 'prettier' },
					txt = { 'prettier' },
					lua = { 'stylua' },
					-- ruby = { 'rubocop' },
					go = { 'gofmt' },
					sh = { 'shfmt' },
					python = { 'black' },
					-- php = { 'php-cs-fixer' },
					-- java = { 'google-java-format' },
					c = { 'clang-format' },
					cpp = { 'clang-format' },
					rust = { 'rustfmt' },
				},
			})
		end
	},
}
