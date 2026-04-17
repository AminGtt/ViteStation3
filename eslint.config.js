import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import prettierConfig from 'eslint-config-prettier'

export default [
    { ignores: ['dist/'] },
    ...defineConfigWithVueTs(
        pluginVue.configs['flat/essential'],
        vueTsConfigs.recommended,
        prettierConfig,
    ),
]
