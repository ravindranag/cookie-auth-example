const components = {
	MuiInputLabel: {
		styleOverrides: {
			root: {
				position: 'static',
				transform: 'none',
				'&+.MuiInput-root': {
					margin: 0
				}
			}
		}
	},
	MuiInput: {
		styleOverrides: {
			root: {
				margin: 0,
			}
		}
	},
	MuiOutlinedInput: {
		styleOverrides: {
			notchedOutline: {
				'& legend': {
					display: 'none'
				},
			}
		}
	},
	MuiTextField: {
		styleOverrides: {
			root: {
				gap: '12px'
			}
		}
	},
	MuiButton: {
		defaultProps: {
			disableElevation: true,
			disableRipple: true
		},
		styleOverrides: {
			root: {
				padding: '10px 16px'
			}
		}
	}
}

export default components
