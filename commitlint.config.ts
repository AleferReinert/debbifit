import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  formatter: '@commitlint/format',
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'subject-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
    'subject-min-length': [RuleConfigSeverity.Error, 'always', 10],
    'subject-max-length': [RuleConfigSeverity.Error, 'always', 72],
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']
    ]
  },
  prompt: {
    settings: {},
    messages: {
      skip: '(pressione enter para pular)',
      max: 'máximo de %d caracteres',
      min: 'mínimo de %d caracteres',
      emptyWarning: 'não pode estar vazio',
      upperLimitWarning: 'excede o limite',
      lowerLimitWarning: 'abaixo do limite'
    },
    questions: {
      scope: {
        description: '[scope] Opcional: nome do componente ou arquivo que está sendo alterado'
      },
      subject: {
        description: '[subject] Descreva o commit'
      },
      body: {
        description: '[body] Opcional: forneça uma descrição detalhada'
      },
      isBreaking: {
        description: 'Existem mudanças que quebram a compatibilidade?'
      },
      isIssueAffected: {
        description: 'Essa mudança afeta alguma issue aberta?'
      },
      type: {
        description: 'Selecione o tipo de commit',
        enum: {
          build: {
            description: 'Alterações no sistema de build ou dependências externas (exemplo: npm)',
            title: 'Builds'
          },
          chore: {
            description: 'Outras alterações que não modificam arquivos src ou de teste',
            title: 'Chores'
          },
          ci: {
            description: 'Alterações em arquivos de configuração e scripts de CI',
            title: 'Continuous Integrations'
          },
          docs: {
            description: 'Atualizações na documentação',
            title: 'Documentation'
          },
          feat: {
            description: 'Novo recurso ou funcionalidade',
            title: 'Features'
          },
          fix: {
            description: 'Correção de bugs',
            title: 'Bug Fixes'
          },
          perf: {
            description: 'Melhorias de desempenho',
            title: 'Performance Improvements'
          },
          refactor: {
            description: 'Melhorias na organização do código sem alterar o comportamento',
            title: 'Code Refactoring'
          },
          revert: {
            description: 'Reverte um commit anterior',
            title: 'Reverts'
          },
          style: {
            description: 'Alterações que não afetam o código (espaços em branco, formatação, ponto e vírgula ausente)',
            title: 'Styles'
          },
          test: {
            description: 'Alterações em testes',
            title: 'Tests'
          }
        }
      }
    }
  }
}

export default Configuration
