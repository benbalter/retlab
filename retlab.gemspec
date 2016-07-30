# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "retlab"
  spec.version       = "0.1.0"
  spec.authors       = ["Ben Balter"]
  spec.email         = ["ben.balter@github.com"]

  spec.summary       = "A minimalist Jekyll theme for your personal site*"
  spec.homepage      = "https://github.com/benbalter/retlab"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_layouts|_includes|_sass|LICENSE|README)/i}) }

  spec.add_development_dependency "github-pages"
  spec.add_development_dependency "jekyll-avatar"
  spec.add_development_dependency "html-proofer"
  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake"
end
