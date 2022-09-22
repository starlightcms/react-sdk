import React from 'react'

const styles = `
  .sl-visual-content *{max-width:100%}
  .sl-visual-content>figure{margin:1em 0}
  .sl-list{list-style:none;padding-left:1em}
  .sl-list>li{margin:.5em 0}
  .sl-list>li::before{content: "•";margin-right:.5em}
  .sl__color{padding:2px 0;border-radius:4px}
  .sl__color__bg--red{background-color:rgb(253,235,236)}
  .sl__color__bg--pink{background-color:rgb(253,235,236)}
  .sl__color__bg--purple{background-color:rgb(244,240,247)}
  .sl__color__bg--blue{background-color:rgb(231,243,248)}
  .sl__color__bg--green{background-color:rgb(237,243,236)}
  .sl__color__bg--yellow{background-color:rgb(251,243,219)}
  .sl__color__bg--orange{background-color:rgb(251,236,221)}
  .sl__color__bg--brown{background-color:rgb(244,238,238)}
  .sl__color__bg--gray{background-color:rgb(241,241,239)}
  .sl__color__text--red{color:rgb(212,76,71)}
  .sl__color__text--pink{color:rgb(193,76,138)}
  .sl__color__text--purple{color:rgb(144,101,176)}
  .sl__color__text--blue{color:rgb(51,126,169)}
  .sl__color__text--green{color:rgb(68,131,97)}
  .sl__color__text--yellow{color:rgb(203,145,47)}
  .sl__color__text--orange{color:rgb(217,115,13)}
  .sl__color__text--brown{color:rgb(159,107,83)}
  .sl__color__text--gray{color:rgb(120,119,116)}
`

/**
 * Renders a `<style>` tag with rules that style the rendered
 * {@link VisualContent} HTML. While not required for VisualContent to work,
 * using these rules is a quick way to make the content look the same way as it
 * does on the Starlight content editor.
 *
 * You only need to render this component once in your application,
 * preferably in the `<head>` section.
 *
 * @group VisualContent
 */
export const VisualContentStyles = (): JSX.Element => {
  return <style dangerouslySetInnerHTML={{ __html: styles }} />
}
