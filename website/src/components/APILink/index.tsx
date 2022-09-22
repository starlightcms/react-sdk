import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'
import Link, { Props } from '@docusaurus/Link'

type APILinkProps = Props & {
  label?: string
}

export const APILink = ({
  label = 'Visualizar na API',
  ...props
}: APILinkProps): JSX.Element => (
  <Link {...props} className={clsx('button button--primary', styles.anchor)}>
    {label}
  </Link>
)
