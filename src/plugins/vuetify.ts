// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { BLUE_THEME } from '@/theme/LightTheme'



export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      defaultTheme: 'BLUE_THEME',
      themes: {
        BLUE_THEME,
      }
    },
    defaults: {
      VCard: {
          rounded: 'md'
      },
      VTextField: {
          variant: 'outlined',
          density: 'comfortable',
          color: 'primary'
      },
      VTextarea: {
          variant: 'outlined',
          density: 'comfortable',
          color: 'primary'
      },
      VSelect: {
          variant: 'outlined',
          density: 'comfortable',
          color: 'primary'
      },
      VListItem: {
          minHeight: '45px'
      },
      VTooltip: {
          location: 'top'
      }
    }
  }
)
