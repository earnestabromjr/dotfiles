local filetype = require "mason-lspconfig.mappings.filetype"
return {
	'akinsho/bufferline.nvim',
	version = "*",
	dependencies = 'nvim-tree/nvim-web-devicons',
	config = function()
		local bufferline = require('bufferline')
		bufferline.setup {
			options = {
				mode = "buffers",
				style_preset = bufferline.style_preset.default,
				show_close_icon = true,
				offsets = { { filetype = "Neotree", text = "Explorer" } },
				diagnostics = 'nvim_lsp',
				diagnostics_indicator = function(_, _, diagnostics_dict)
					local s = " "
					for e, n in pairs(diagnostics_dict) do
						local sym = e == "error" and " " or (e == "warning" and " " or "")
						s = s .. sym .. n
					end
					return s
				end,
			}

		}
	end
}
