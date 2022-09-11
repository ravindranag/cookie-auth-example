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
	MuiButton: {
		defaultProps: {
			disableElevation: true
		}
	}
}

export default components
