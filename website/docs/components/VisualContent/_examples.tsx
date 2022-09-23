import React from 'react'
import { ListComponent, VisualContent, VisualData } from '../../../../src'
import CodeBlock from '@theme/CodeBlock'
import styles from './index.module.scss'

export const Example = (): JSX.Element => {
  const example = `
import { VisualContent } from '@starlightcms/react-sdk'

const SimpleExample = () => {
  const content = {
    time: 1663784614074,
    version: '1.42',
    blocks: [
      {
        id: '1',
        type: 'header',
        data: {
          level: 2,
          text: 'Olá, mundo! 😃'
        }
      },
      {
        id: '2',
        type: 'paragraph',
        data: {
          text: 'Esse é apenas um exemplo de conteúdo, incluindo <b>conteúdo</b> em <i>HTML!</i>'
        }
      },
    ]
  }

  return (
    <VisualContent content={content}/>
  )
}  
`

  const content: VisualData = {
    time: 1663784614074,
    version: '1.42',
    blocks: [
      {
        id: '1',
        type: 'header',
        data: {
          level: 2,
          text: 'Olá, mundo! 😃',
        },
      },
      {
        id: '2',
        type: 'paragraph',
        data: {
          text: 'Esse é apenas um exemplo de conteúdo, incluindo <b>conteúdo</b> em <i>HTML!</i>',
        },
      },
    ],
  }

  return (
    <div className={styles.example}>
      <h3 className={styles.exampleHeader}>Exemplo</h3>
      <CodeBlock language="jsx">{example}</CodeBlock>
      <h3 className={styles.exampleHeader}>Resultado</h3>
      <div className={styles.exampleContent}>
        <VisualContent content={content} />
      </div>
    </div>
  )
}

export const ExcerptExample = (): JSX.Element => {
  const example = `
import { VisualContent } from '@starlightcms/react-sdk'

const ExcerptExample = () => {
  const content = {
    time: 1663784614074,
    version: '1.42',
    blocks: [
      {
        id: '1',
        type: 'header',
        data: {
          level: 2,
          text: 'Olá, mundo! 😃'
        }
      },
      {
        id: '2',
        type: 'paragraph',
        data: {
          text: 'Esse é apenas um exemplo de conteúdo, incluindo <b>conteúdo</b> em <i>HTML!</i> Dessa vez, ' +
           'vamos adicionar mais conteúdo nesse parágrafo apenas para exemplificar como a propriedade "excerpt" ' +
            'funciona, cortando o texto quando a quantidade de palavras passa do limite definido pela propriedade ' +
             '"excerptLength", que, por padrão, define um limite de 40 palavras.'
        }
      },
    ]
  }

  return (
    // Note que passamos a propriedade "excerpt" abaixo.
    // Você também pode passar "excerptLength" se quiser alterar o limite de palavras.
    <VisualContent content={content} excerpt />
  )
}  
`
  const content: VisualData = {
    time: 1663784614074,
    version: '1.42',
    blocks: [
      {
        id: '1',
        type: 'header',
        data: {
          level: 2,
          text: 'Olá, mundo! 😃',
        },
      },
      {
        id: '2',
        type: 'paragraph',
        data: {
          text:
            'Esse é apenas um exemplo de conteúdo, incluindo <b>conteúdo</b> em <i>HTML!</i> Dessa vez, ' +
            'vamos adicionar mais conteúdo nesse parágrafo apenas para exemplificar como a propriedade "excerpt" ' +
            'funciona, cortando o texto quando a quantidade de palavras passa do limite definido pela propriedade ' +
            '"excerptLength", que, por padrão, define um limite de 40 palavras.',
        },
      },
    ],
  }

  return (
    <div className={styles.example}>
      <h3 className={styles.exampleHeader}>Exemplo</h3>
      <CodeBlock language="jsx">{example}</CodeBlock>
      <h3 className={styles.exampleHeader}>Resultado</h3>
      <div className={styles.exampleContent}>
        <VisualContent content={content} excerpt />
      </div>
    </div>
  )
}

export const CustomExample = (): JSX.Element => {
  const example = `
import { VisualContent, ListComponent } from '@starlightcms/react-sdk'

const CustomListComponent = ({ id, type, data }) => {
  if (data.style === 'ordered') {
    // Retornamos uma lista em texto para listas ordenadas.
    return (
      <p>{data.items.map(item => item.content).join(', ')}.</p>
    )
  }

  // Usamos o componente de lista padrão para listas sem ordem.
  return <ListComponent id={id} type={type} data={data} />
}

const CustomExample = () => {
  const content = {
    time: 1663784614074,
    version: '1.42',
    blocks: [
      {
        id: '1',
        type: 'list',
        data: {
          style: 'ordered',
          items: [{ content: 'Maçãs' }, { content: 'Bananas' }, { content: 'Laranjas' }]
        }
      },
      {
        id: '2',
        type: 'list',
        data: {
          style: 'unordered',
          items: [{ content: 'Azul' }, { content: 'Vermelho' }, { content: 'Verde' }]
        }
      }
    ]
  }

  return (
    <VisualContent
      content={content}
      components={{
        list: CustomListComponent
      }}
    />
  )
}
`
  const content: VisualData = {
    time: 1663784614074,
    version: '1.42',
    blocks: [
      {
        id: '1',
        type: 'list',
        data: {
          style: 'ordered',
          items: [
            { content: 'Maçãs' },
            { content: 'Bananas' },
            { content: 'Laranjas' },
          ],
        },
      },
      {
        id: '2',
        type: 'list',
        data: {
          style: 'unordered',
          items: [
            { content: 'Azul' },
            { content: 'Vermelho' },
            { content: 'Verde' },
          ],
        },
      },
    ],
  }

  const CustomListComponent = ({ id, type, data }) => {
    if (data.style === 'ordered') {
      // Retornamos uma lista em texto para listas ordenadas.
      return <p>{data.items.map((item) => item.content).join(', ')}.</p>
    }

    // Usamos o componente de lista padrão para listas sem ordem.
    return <ListComponent id={id} type={type} data={data} />
  }

  return (
    <div className={styles.example}>
      <h3 className={styles.exampleHeader}>Exemplo</h3>
      <CodeBlock language="jsx">{example}</CodeBlock>
      <h3 className={styles.exampleHeader}>Resultado</h3>
      <div className={styles.exampleContent}>
        <VisualContent
          content={content}
          components={{ list: CustomListComponent }}
        />
      </div>
    </div>
  )
}
