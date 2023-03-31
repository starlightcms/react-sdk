import React from 'react'
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents'
import { APILink } from '@site/src/components/APILink'
import IdealImage from '@theme/IdealImage'


export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Implement additional tags and components
  APILink,
  IdealImage,
}
