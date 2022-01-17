#!/bin/bash

SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ONBOARDING_DOCS_DIR=$SCRIPTDIR/../content/docs/*
TECH_DOCS_DIR=$SCRIPTDIR/../tmp-roadie-tech-docs
# clean the directory
rm -rf $TECH_DOCS_DIR && mkdir -p $TECH_DOCS_DIR/docs
rsync -av $ONBOARDING_DOCS_DIR $TECH_DOCS_DIR/docs --exclude=docs-nav.yaml
cp $SCRIPTDIR/../content/docs/docs-nav.yaml $TECH_DOCS_DIR/mkdocs.yml

echo "Rewriting sidebar yaml nav"
sed 's/\/docs\/\(.*\)\//\1\/index.md/g' $TECH_DOCS_DIR/mkdocs.yml > $TECH_DOCS_DIR/mkdocs.yml.tmp && mv $TECH_DOCS_DIR/mkdocs.yml.tmp $TECH_DOCS_DIR/mkdocs.yml

echo "Removing unparsable markdown"
# remove unparsable markdown
for filename in $(find $TECH_DOCS_DIR/docs/* -type f -print); do
    if [[ $filename == *.md ]]; then
      non_relative_links=$(cat $filename | grep "roadie.io/docs")
      if [[ $non_relative_links ]]; then
        echo ""
        echo "There is/are reference(s) to other documentation in ${filename} that are not relative"
        echo "This will break tech-docs."
        echo "Please fix them"
        echo ""
        echo $non_relative_links
        exit 1
      fi
      # Replace relative path links to relative structure links + chop off unparsable md header
      sed 's/(\/docs\/\(.*\))/(\.\.\/\.\.\/\1)/g' $filename | tail -n +6 > "$filename.tmp" &&  mv "$filename.tmp" "$filename"
    fi
done
cp $SCRIPTDIR/templates/*.md $TECH_DOCS_DIR/docs
echo "Tech docs generation completed!"