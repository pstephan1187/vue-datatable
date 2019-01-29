export default {
    plugins: [
      'node_modules/jsdoc-vuejs'
    ],
    recurseDepth: 10,
    source: {
      includePattern: 'src(\\/|\\\\).+\\.(js(doc|x)?|vue)$',
      excludePattern: '((^|\\/|\\\\)_|node_modules|tests)'
    },
    sourceType: 'module',
    tags: {
      allowUnknownTags: true,
      dictionaries: [
        'jsdoc',
        'closure'
      ]
    },
    templates: {
      cleverLinks: false,
      monospaceLinks: false,
      systemName: 'VueJS-Datatable',
      systemSummary: 'A Vue.js component for filterable and paginated tables.',
      systemColor: '#2779bd',
      /*
      systemLogo:           "{string}",
      footer:               "{string}",
      copyright:            "{string}",
      includeDate:          "{boolean}",
      dateFormat:           "{string}",
      inlineNav:            "{boolean}",
      inverseNav:           "{boolean}",
      navMembers:           "{array.<object>}",
      linenums:             "{boolean}",
      showTableOfContents:  "{boolean}",
      showAccessFilter:     "{boolean}",
      analytics:            "{object}",
      collapseSymbols:      "{boolean}",
      methodHeadingReturns: "{boolean}",
      outputSourceFiles:    "{boolean}",
      outputSourcePath:     "{boolean}",
      sort:                 "{boolean|string}",
      search:               "{boolean}",
      favicon:              "{string}",
      stylesheets:          "{array.<string>}",
      scripts:              "{array.<string>}"
      */
    },
    opts: {
      template: './node_modules/foodoc/template',
      encoding: 'utf8',
      destination: './docs/',
      recurse: true,
      readme: './README.md'
    }
  }
