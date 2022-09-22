const model =
  'Modelos representam dados que se repetem, como posts de um blog ou revistas.'
const workspace =
  'Áreas de trabalho representam sites ou aplicativos no Starlight. Todo conteúdo pertence à uma área de trabalho.'
const entry =
  'Entradas são instâncias de um modelo, como uma postagem de um blog ou uma edição de uma revista.'
const modelCategory =
  'Categorias são usadas para organizar as entradas de um modelo em grupos.'
const collection =
  'Coleções são usadas para organizar entradas, singletons ou mídia em em listas.'
const singleton =
  'Singletons representam estruturas de dados únicas numa aplicação, como uma página, menus, ou configurações de SEO.'
const slug =
  'Slugs são identificadores únicos usados por todos os tipos de dado no Starlight. São utilizados em URLs para identificar dados.'

const jargon = {
  modelo: model,
  modelos: model,
  'área de trabalho': workspace,
  'áreas de trabalho': workspace,
  entrada: entry,
  entradas: entry,
  categoria: modelCategory,
  categorias: modelCategory,
  'categoria de modelo': modelCategory,
  'categorias de modelo': modelCategory,
  coleção: collection,
  coleções: collection,
  singleton: singleton,
  singletons: singleton,
  slug: slug,
  slugs: slug,
}

module.exports = jargon
