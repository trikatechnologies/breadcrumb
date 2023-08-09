import React, { Fragment, useMemo } from 'react'
import { Link } from 'vtex.render-runtime'
import { useCssHandles, applyModifiers } from 'vtex.css-handles'
import { IconCaret } from 'vtex.store-icons'

const CSS_HANDLES = [
  'container',
  'link',
  'homeLink',
  'arrow',
  'term',
  'termArrow',
] as const

export interface NavigationItem {
  name: string
  href: string
}

export interface Props {
  term?: string
  /** Shape [ '/Department' ,'/Department/Category'] */
  categories: string[]
  categoryTree?: NavigationItem[]
  breadcrumb?: NavigationItem[]
  showOnMobile?: boolean
  homeIconSize?: number
  caretIconSize?: number
}


/**
 * Breadcrumb Component.
 */
const Breadcrumb: React.FC<Props> = ({
  term,
  categories,
  categoryTree,
  breadcrumb,
  caretIconSize = 8,
}) => {
  const handles = useCssHandles(CSS_HANDLES)
  
  const navigationList = useMemo(
    () => categoryTree?.filter((category)=>{
      return category.name!="Create Your Own Murals"
    })??[],
    [breadcrumb, categories, categoryTree]
  )

  const linkBaseClasses = 'dib pv1 link ph2 hover-c-link'
    
  return (
    <div data-testid="breadcrumb" className={`${handles.container} pv3`}>
      <Link
        className={`${handles.link} ${handles.homeLink} ${linkBaseClasses} v-mid`}
        page="store.home"
        style={{color:"#5f697a",display:"contents"}}
      >
        Home
      </Link>
      <span
            
            className={`ph2 c-muted-2`}
          >
            <IconCaret orientation="right" size={caretIconSize} />
            <Link
              className={`${linkBaseClasses}`}
              to={`/wall-murals`}
              style={{color:"#444041"}}
              // See https://github.com/vtex-apps/breadcrumb/pull/66 for the reasoning behind this
              waitToPrefetch={1200}
            >
              Shop Murals
            </Link>
          </span>
      {navigationList.map(({ name, href }, i) => {
        let decodedName = ''

        try {
          decodedName = decodeURIComponent(name)
        } catch {
          decodedName = name
        }

        return (
          <span
            key={`navigation-item-${i}`}
            className={`${applyModifiers(
              handles.arrow,
              (i + 1).toString()
            )} ph2 c-muted-2`}
          >
            <IconCaret orientation="right" size={caretIconSize} />
            <Link
              className={`${applyModifiers(
                handles.link,
                (i + 1).toString()
              )} ${linkBaseClasses}`}
              to={href}
              style={{color:"#5f697a"}}
              // See https://github.com/vtex-apps/breadcrumb/pull/66 for the reasoning behind this
              waitToPrefetch={1200}
            >
              {decodedName}
            </Link>
          </span>
        )
      })}

      {term && (
        <Fragment>
          <span
            className={`${handles.arrow} ${handles.termArrow} ph2 c-muted-2`}
          >
            <IconCaret orientation="right" size={caretIconSize} />
          </span>
          <span className={`${handles.term} ph2 c-on-base`}>{term}</span>
        </Fragment>
      )}
    </div>
  )
}

Breadcrumb.defaultProps = {
  categories: [],
}

export default Breadcrumb
