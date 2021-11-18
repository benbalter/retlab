# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = 'retlab'
  spec.version       = '0.1.0'
  spec.authors       = ['Ben Balter']
  spec.email         = ['ben.balter@github.com']

  spec.summary       = 'A minimalist Jekyll theme for your personal site*'
  spec.homepage      = 'https://github.com/benbalter/retlab'
  spec.license       = 'MIT'

  regex      = %r{^(_layouts|_includes|_sass|LICENSE|README)/i}
  spec.files = `git ls-files -z`.split("\x0").select { |f| f.match(regex) }

  spec.add_runtime_dependency 'github-pages', '>= 167'
  #spec.add_runtime_dependency 'jekyll-include-cache'

  spec.add_development_dependency 'html-proofer', '~> 3.0'
  spec.add_development_dependency 'rake', '~> 11.0'
  spec.add_development_dependency 'rubocop', '~> 0.40'
end
