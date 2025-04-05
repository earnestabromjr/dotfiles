-- Configuration for Github Copilot and Copilot Chat using Lazy plugin manager
return {
	-- Github Copilot
	{
		"zbirenbaum/copilot.lua",
		cmd = "Copilot",
		event = "InsertEnter",
		config = function()
			require("copilot").setup({
				panel = {
					enabled = true,
					auto_refresh = true,
					keymap = {
						jump_prev = "[[",
						jump_next = "]]",
						accept = "<CR>",
						refresh = "gr",
						open = "<M-CR>",
					},
					layout = {
						position = "bottom", -- | top | left | right
						ratio = 0.4,
					},
				},
				suggestion = {
					enabled = true,
					auto_trigger = true,
					debounce = 75,
					keymap = {
						accept = "<Tab>",
						accept_word = false,
						accept_line = false,
						next = "<M-]>",
						prev = "<M-[>",
						dismiss = "<C-]>",
					},
				},
				filetypes = {
					yaml = false,
					markdown = false,
					help = false,
					gitcommit = false,
					gitrebase = false,
					hgcommit = false,
					svn = false,
					cvs = false,
					["."] = false,
				},
				copilot_node_command = "node", -- Node.js version must be > 16.x
				server_opts_overrides = {},
			})
		end,
	},

	-- Github Copilot Chat
	{
		"CopilotC-Nvim/CopilotChat.nvim",
		branch = "canary",
		dependencies = {
			{ "zbirenbaum/copilot.lua" },
			{ "nvim-lua/plenary.nvim" },
		},
		opts = {
			debug = false, -- Enable debugging
			-- Window options
			window = {
				layout = "float", -- 'float' | 'split' | 'top' | 'bottom'
				relative = "editor", -- 'editor' | 'win' | 'cursor' | 'mouse'
				width = 0.8, -- fractional width of editor
				height = 0.6, -- fractional height of editor
				border = "rounded", -- 'none' | 'single' | 'double' | 'rounded' | 'solid' | 'shadow'
				zindex = 50, -- determines if window is on top or below other floating windows
			},
			-- Copilot Chat panel options
			panel = {
				auto_refresh = false, -- Auto refresh panel content
				keymap = {
					jump_prev = "[[",
					jump_next = "]]",
					accept = "<CR>",
					refresh = "gr",
					open = "<M-CR>",
				},
				layout = {
					position = "right", -- | top | left | right
					ratio = 0.4,
				},
			},
			-- Keymap configuration
			mappings = {
				complete = {
					detail = "Get completions",
					mode = "n",
					key = "<leader>cc",
				},
				chat = {
					detail = "Open chat",
					mode = "n",
					key = "<leader>cq",
				},
				quick_chat = {
					detail = "Quick chat",
					mode = "n",
					key = "<leader>cq",
				},
				help = {
					detail = "Help info",
					mode = "n",
					key = "<leader>ch",
				},
				-- Additional command mappings
				reset = {
					detail = "Reset conversation",
					mode = "n",
					key = "<leader>cr",
				},
				close = {
					detail = "Close chat",
					mode = "n",
					key = "<leader>cx",
				},
			},
		},
		config = function(_, opts)
			require("CopilotChat").setup(opts)
		end,
	},
}
