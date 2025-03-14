const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ theme, addBase, addVariant, addUtilities }) => {
  const plain = {
    '.slider-txt-rtl': {},
    '.cursor-grab': {
      cursor: 'grab',
    },
    '.cursor-grabbing': {
      cursor: 'grabbing',
    },
    '.touch-none': {
      touchAction: 'none',
    },
    '.tap-highlight-transparent': {
      '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
    },
    '.touch-callout-none': {
      '-webkit-touch-callout': 'none',
    },
    '.will-change-transform': {
      willChange: 'transform',
    },
    '.transform-origin-0': {
      transformOrigin: '0 0',
    },
    '.transform-style-flat': {
      '-webkit-transform-style': 'preserve-3d',
      transformStyle: 'flat',
    },
    '.cursor-inherit': {
      cursor: 'inherit',
    },
    '.cursor-ew-resize': {
      cursor: 'ew-resize',
    },
    [`.slider-vertical .${'v:cursor-ns-resize'}`]: {
      cursor: 'ns-resize',
    },
  }

  const h = {
    '.arrow-bottom': {
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        width: '0',
        height: '0',
        border: '5px solid transparent',
        borderTopColor: 'inherit',
        transform: 'translate(-50%)',
      }
    },
    '.arrow-top': {
      '&:before': {
        content: '""',
        position: 'absolute',
        top: '-10px',
        left: '50%',
        width: '0',
        height: '0',
        border: '5px solid transparent',
        borderBottomColor: 'inherit',
        transform: 'translate(-50%)',
      }
    },
  }

  const v = {
    '.arrow-left': {
      '&:before': {
        content: '""',
        position: 'absolute',
        left: '-10px',
        top: '50%',
        width: '0',
        height: '0',
        border: '5px solid transparent',
        borderRightColor: 'inherit',
        transform: 'translateY(-50%)',
      }
    },
    '.arrow-right': {
      '&:before': {
        content: '""',
        position: 'absolute',
        right: '-10px',
        top: '50%',
        width: '0',
        height: '0',
        border: '5px solid transparent',
        borderLeftColor: 'inherit',
        transform: 'translateY(-50%)',
      }
    },
  }

  addUtilities(plain)
  addUtilities(h, ['h'])
  addUtilities(v, ['v'])

  addVariant('h', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.slider-horizontal .${`h${separator}${className}`}`
    })
  })

  addVariant('v', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.slider-vertical .${`v${separator}${className}`}`
    })
  })

  addVariant('merge-h', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.slider-horizontal .slider-origin > .${`merge-h${separator}${className}`}`
    })
  })

  addVariant('merge-v', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.slider-vertical .slider-origin > .${`merge-v${separator}${className}`}`
    })
  })

  addVariant('txt-rtl-h', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.slider-horizontal.slider-txt-rtl .${`txt-rtl-h${separator}${className}`}`
    })
  })

  addVariant('tap', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.slider-tap .${`tap${separator}${className}`}`
    })
  })

  addVariant('slider-disabled', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `[disabled] .${`slider-disabled${separator}${className}`}`
    })
  })

  addVariant('tt-focus', ({ container, separator }) => {
    container.walkRules(rule => {
      rule.selector = `.slider-tooltip-focus:not(.slider-focused) .${`tt-focus${separator}${rule.selector.slice(1)}`}`
      rule.walkDecls(decl => {
        decl.important = true
      })
    })
  })

  addVariant('tt-focused', ({ container, separator }) => {
    container.walkRules(rule => {
      rule.selector = `.slider-tooltip-focus.slider-focused:not(.slider-tooltip-hidden) .${`tt-focused${separator}${rule.selector.slice(1)}`}`
      rule.walkDecls(decl => {
        decl.important = true
      })
    })
  })

  addVariant('tt-drag', ({ container, separator }) => {
    container.walkRules(rule => {
      rule.selector = `.slider-tooltip-drag:not(.slider-state-drag) .${`tt-drag${separator}${rule.selector.slice(1)}`}`
      rule.walkDecls(decl => {
        decl.important = true
      })
    })
  })

  addVariant('tt-dragging', ({ container, separator }) => {
    container.walkRules(rule => {
      rule.selector = `.slider-tooltip-drag.slider-state-drag .${`tt-dragging${separator}${rule.selector.slice(1)}:not(.slider-tooltip-hidden)`},
                        .slider-tooltip-drag .slider-active .${`tt-dragging${separator}${rule.selector.slice(1)}`}`
      rule.walkDecls(decl => {
        decl.important = true
      })
    })
  })
}, {
  theme: {
    extend: {
      zIndex: {
        1: 1,
      },
      width: {
        '1\/10': '10%',
      },
      height: {
        '1\/10': '10%',
      },
      minWidth: {
        5: '1.25rem',
      },
      inset: {
        '-1.25': '-0.3125rem'
      },
      boxShadow: {
        slider: '0.5px 0.5px 2px 1px rgba(0,0,0,.32)',
        'slider-active': '0.5px 0.5px 2px 1px rgba(0,0,0,.42)',
      }
    }
  }
})