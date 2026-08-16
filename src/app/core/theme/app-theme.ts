import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const AppTheme = definePreset(Aura, {
  primitive: {
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      950: '#172554'
    },

    cyan: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344'
    }
  },

  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    },

    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        },

        formField: {
          background: '#ffffff',
          borderColor: '#e2e8f0',
          hoverBorderColor: '{primary.color}',
          focusBorderColor: '{primary.color}',
          color: '#0f172a',
          placeholderColor: '#94a3b8'
        },

        highlight: {
          background: '{blue.50}',
          focusBackground: '{blue.100}',
          color: '{blue.700}',
          focusColor: '{blue.800}'
        }
      },

      dark: {
        surface: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        },

        formField: {
          background: '#111827',
          borderColor: '#263449',
          hoverBorderColor: '{primary.color}',
          focusBorderColor: '{primary.color}',
          color: '#e2e8f0',
          placeholderColor: '#64748b'
        },

        highlight: {
          background: 'rgba(59, 130, 246, 0.16)',
          focusBackground: 'rgba(59, 130, 246, 0.24)',
          color: '#93c5fd',
          focusColor: '#bfdbfe'
        }
      }
    },

    focusRing: {
      width: '2px',
      style: 'solid',
      color: '{primary.color}',
      offset: '1px'
    }
  },

  components: {
    button: {
      borderRadius: '8px'
    },

    inputtext: {
      borderRadius: '8px'
    },

    select: {
      borderRadius: '8px'
    },

    multiselect: {
      borderRadius: '8px'
    },

    inputnumber: {
      borderRadius: '8px'
    },

    datepicker: {
      borderRadius: '8px'
    },

    checkbox: {
      borderRadius: '5px'
    },

    card: {
      borderRadius: '12px'
    }
  }
});