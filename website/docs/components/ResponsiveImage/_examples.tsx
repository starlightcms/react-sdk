import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import styles from './index.module.scss'
import { ResponsiveImage } from '../../../../src'

export const Example = (): JSX.Element => {
  const example = `
import { ResponsiveImage } from '@starlightcms/react-sdk'

const SimpleExample = () => {
  // Exemplo de uma imagem utilizando uma URL.
  const urlImage = 'https://media.starlightcms.io/workspaces/starlight/blog/optimized/on-whitepng-txpbw1z8li.png'
  
  // Exemplo de uma imagem vinda do Starlight.
  const starlightImage = {
    id: 1234567890,
    name: 'example-image',
    extension: 'png',
    mime: 'image/png',
    alt: 'Example of a Starlight-hosted image.',
    // A lista de arquivos foi resumida.
    files: [...],
    created_at: '2022-09-20T19:16:53.236Z'
  }

  return (
    <div>
      <ResponsiveImage image={urlImage}/>
      <ResponsiveImage image={starlightImage}/>
    </div>
  )
}  
`

  const urlImage =
    'https://media.starlightcms.io/workspaces/starlight/blog/optimized/on-whitepng-txpbw1z8li.png'

  const starlightImage = {
    id: 1234567890,
    name: 'example-image',
    extension: 'png',
    mime: 'image/png',
    alt: 'Example of a Starlight-hosted image.',
    description: 'This is an optional caption set in the Starlight interface.',
    files: [
      {
        id: 69147955,
        created_at: '2022-09-20T19:16:53.236Z',
        variation: 'original',
        path: 'https://media.starlightcms.io/workspaces/starlight/blog/original/on-orangepng-9ggepbebmb.png',
        mime: 'image/png',
        background_color: 'f07924',
        filesize: 14003,
        meta: {
          width: 512,
          height: 512,
        },
      },
      {
        id: 591566022,
        created_at: '2022-09-20T19:16:53.236Z',
        variation: 'optimized',
        path: 'https://media.starlightcms.io/workspaces/starlight/blog/optimized/on-orangepng-9ggepbebmb.png',
        mime: 'image/png',
        background_color: 'f07924',
        filesize: 6751,
        meta: {
          width: 512,
          height: 512,
        },
      },
      {
        id: 2146702281,
        created_at: '2022-09-20T19:16:53.236Z',
        variation: 'thumbnail',
        path: 'https://media.starlightcms.io/workspaces/starlight/blog/thumbnail/on-orangepng-9ggepbebmb.png',
        mime: 'image/png',
        background_color: 'f07924',
        filesize: 16835,
        meta: {
          width: 200,
          height: 200,
        },
      },
    ],
    created_at: '2022-09-20T19:16:53.236Z',
  }

  return (
    <div className={styles.example}>
      <h3 className={styles.exampleHeader}>Exemplo</h3>
      <CodeBlock language="jsx">{example}</CodeBlock>
      <h3 className={styles.exampleHeader}>Resultado</h3>
      <div className={styles.exampleContent}>
        <div className={styles.exampleImageWrapper}>
          <ResponsiveImage image={urlImage} />
          <ResponsiveImage image={starlightImage} />
        </div>
      </div>
    </div>
  )
}
