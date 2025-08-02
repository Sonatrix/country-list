#!/bin/bash

# Find and replace assert with expect in test files
find ./test -type f -name "*.js" -exec sed -i 's/assert(/expect(/g' {} \;
find ./test -type f -name "*.js" -exec sed -i 's/);$/\).to.be.true;/g' {} \;
find ./test -type f -name "*.js" -exec sed -i 's/assert(!(/expect(/g' {} \;
find ./test -type f -name "*.js" -exec sed -i 's/!Number.isNaN/Number.isNaN/g' {} \;
find ./test -type f -name "*.js" -exec sed -i 's/!.*);$/\).to.not.exist;/g' {} \;
find ./test -type f -name "*.js" -exec sed -i 's/expect(Array.isArray\(.*\)).to.be.true;/expect(\1).to.be.an("array");/g' {} \;
find ./test -type f -name "*.js" -exec sed -i 's/expect(\(.*\) === \(.*\)).to.be.true;/expect(\1).to.equal(\2);/g' {} \;
