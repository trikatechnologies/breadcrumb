import React, { useContext, useMemo } from 'react'
import { ProductContext } from 'vtex.product-context'
import { ProductBreadcrumb as ProductBreadcrumbStructuredData } from 'vtex.structured-data'

import BaseBreadcrumb, { Props, NavigationItem } from '../BaseBreadcrumb'

// Markers left by the VTEX translation layer when it fails to resolve a field,
// e.g. "Animal Murals (((3))) <<<en-US>>>" or "[[[original]]]Animal Murals"
const TRANSLATION_MARKUP = /\(\(\([^)]*\)\)\)|<<<[^>]*>>>|\[\[\[[^\]]*\]\]\]/g

const hasTranslationMarkup = (value: string) =>
  /\(\(\(|<<<|\[\[\[/.test(value)

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

/** Maps a category href (e.g. "/c/animal-murals") to its catalog name, from paths like "/c/Animal Murals/" */
const getNamesByHref = (categories: string[]) => {
  const namesByHref: Record<string, string> = {}

  categories.forEach((path) => {
    const segments = path.split('/').filter(Boolean)
    const href = `/${segments.map(slugify).join('/')}`

    namesByHref[href] = segments[segments.length - 1]
  })

  return namesByHref
}

const sanitizeCategoryTree = (
  categoryTree: NavigationItem[] | undefined,
  categories: string[]
) => {
  if (!categoryTree?.some(({ name }) => hasTranslationMarkup(name ?? ''))) {
    return categoryTree
  }

  const namesByHref = getNamesByHref(categories)

  return categoryTree
    .map((item) => ({
      ...item,
      name:
        namesByHref[item.href?.toLowerCase()] ??
        (item.name ?? '').replace(TRANSLATION_MARKUP, '').replace(/\s+/g, ' ').trim(),
    }))
    .filter(({ name }) => name)
}

const withProductContextWrapper = (
  Component: React.ComponentType<Props>
): React.FC<Props> => (props) => {
  const { product } = useContext(ProductContext) || { product: null }
  const categories = product?.categories ?? []
  const categoryTree = useMemo(
    () => sanitizeCategoryTree(product?.categoryTree, categories),
    [product?.categoryTree, categories]
  )

  return (
    <>
      <ProductBreadcrumbStructuredData
        categoryTree={categoryTree}
        productName={product?.productName}
        productSlug={product?.linkText}
      />
      <Component
        term={product?.productName}
        categories={categories}
        categoryTree={categoryTree}
        breadcrumb={props.breadcrumb}
        showOnMobile={props.showOnMobile}
        homeIconSize={props.homeIconSize}
        caretIconSize={props.caretIconSize}
      />
    </>
  )
}

export default withProductContextWrapper(BaseBreadcrumb)
