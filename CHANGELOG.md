# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.17.1] - 2023-08-09

## [1.16.1] - 2022-09-22

## [1.16.0] - 2022-08-22

## [1.15.0] - 2022-08-22

## [1.14.0] - 2022-08-17

## [1.13.0] - 2022-08-17

## [1.12.0] - 2022-02-23

## [1.11.0] - 2021-12-22

## [1.10.0] - 2021-12-22

## [1.9.4] - 2021-07-16

### Fixed

- Update the README to clarify the difference between `breadcrumb.search` and `breadcrumb`.

## [1.9.3] - 2021-06-02

### Added
- New `breadcrumb.search` block added to README.

## [1.9.2] - 2021-02-23

### Fixed
- Breadcrumb with encoded names.

## [1.9.1] - 2020-09-15
### Security
- Update `mixin-deep` to `1.3.2`.

## [1.9.0] - 2020-08-04
### Added
- Structured Data.

## [1.8.6] - 2020-06-15

### Added
- Accept `facets` breadcrumb as fallback.

## [1.8.5] - 2020-04-24
### Changed
- Use `waitForPrefetch` prop when rendering `<Link />`.

## [1.8.4] - 2019-12-16

## [1.8.3] - 2019-12-16

## [1.8.2] - 2019-12-03

## [1.8.1] - 2019-12-02
- Update documentation and delete out-dated README 

## [1.8.0] - 2019-11-05
### Added
- New `homeLink` and `termArrow` CSS handles.
- New `homeIconSize` and `caretIconSize` props.
- Modifiers to `link` and `arrow` CSS handles.

## [1.7.1] - 2019-10-28
### Chore
- New release to trigger a rebuild enabling lazy evaluation of breadcrumb entrypoints.

## [1.7.0] - 2019-09-06
### Added
- `breadcrumb.product` and `breadcrumb.search` blocks.

## [1.6.1] - 2019-08-29

## [1.6.0] - 2019-08-07

### Added

- `showOnMobile` on `SearchResult`

## [1.5.4] - 2019-08-06

### Changed

- Changed Breadcrumb CSS so it can be displayed on mobile

## [1.5.3] - 2019-06-27

### Fixed

- Build assets with new builder hub.

## [1.5.2] - 2019-06-21

### Fixed

- Use wrapper for PDP to parse props correctly.

## [1.5.1] - 2019-06-19

### Fixed

- When on flexible PDP, get categoryTree correctly.

## [1.5.0] - 2019-05-27

### Added

- Added support for ProductContext, which allows adding the breadcrumb directly inside the product page.

## [1.4.1] - 2019-05-20

### Changed

- Create prop `breadcrumb`, used for the productSearch server generated breadcrumb navigation routes.

## [1.4.0] - 2019-05-07

### Added

- Category tree prop for displaying breadcrumb along with correct link

## [1.3.6] - 2019-03-27

### Changed

- No transformations on category names.

### Added

- Add tests.

## [1.3.5] - 2019-03-01

### Changed

- Using `store-icons` instead of `dreamstore-icons`

### Added

- Travis config file.
- Prettier file.

### Changed

- Update test to use `react-testing-library` and make snapshot test.

## [1.3.4] - 2019-02-12

### Changed

- Update the `README.md` with the docs.

## [1.3.3] - 2019-02-08

### Changed

- Use Icons from `vtex.dreamstore-icons`.

## [1.3.2] - 2019-01-29

## [1.3.1] - 2019-01-29

### Fixed

- Remove `inheritComponent` from blocks.

## [1.3.0] - 2019-01-18

### Changed

- Update React builder to 3.x.

## [1.2.1] - 2019-01-14

### Changed

- Remove `undefined` class.

## [1.2.0] - 2019-01-09

### Changed

- Bye `pages.json`! Welcome `store-builder`.

## [1.1.0] - 2019-01-04

### Added

- Support to CSS Modules.

## [1.0.2] - 2018-12-11

## [1.0.1] - 2018-11-22

### Fixed

- Department link not redirecting correctly

## [1.0.0] - 2018-11-20

### Added

- Replace colors with Design Tokens.

### Changed

- Use icons from dreamstore icon pack.

## [0.3.0] - 2018-10-31

### Changed

- Move app to typescript.

## [0.2.4] - 2018-10-24

### Fixed

- hide breadcrumb for mobile viewport.

## [0.2.3] - 2018-09-14

### Removed

- Remove page padding.

## [0.2.2] - 2018-09-13

### Added

- Default padding matching the page.

## [0.2.1] - 2018-08-10

## Changed

- Remove pages sufixes (`/s`, `/d`, `/sc`)

## [0.2.0] - 2018-08-10

### Changed

- Change the props passed to the Breadcrumbs and adequate it to the design specified.

## [0.1.5] - 2018-08-01

### Added

- Basic unit tests

## [0.1.4] - 2018-07-23

### Fixed

- PropTypes warning.

### Added

- Stale cache for product preview

## [0.1.3] - 2018-07-19

### Fixed

- receiving categories from productQuery and added loading validation.

## [0.1.2] - 2018-07-10

### Removed

- billingOptions from `manifest.json`

## [0.1.1] - 2018-07-10

### Fixed

- Breadcrumb link redirect.

## [0.1.0] - 2018-05-29

### Added

- Breadcrumbs component

### Changed

- Passing multiples terms to search page
