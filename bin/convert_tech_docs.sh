#!/bin/bash

SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ONBOARDING_DOCS_DIR=$SCRIPTDIR/../content/docs/*
TECH_DOCS_DIR=$SCRIPTDIR/../roadie-tech-docs
# clean the directory
rm -rf TECH_DOCS_DIR && mkdir -p $TECH_DOCS_DIR/docs
cp -rf $ONBOARDING_DOCS_DIR $TECH_DOCS_DIR/docs
cp $SCRIPTDIR/templates/mkdocs.yml $TECH_DOCS_DIR

echo "Generating mkdocs file...";
# Generate mkdocs file navigation
for dir in $(find $TECH_DOCS_DIR/docs/* -maxdepth 0 -type d); do
    # Get base dirs
    topic=$(basename $dir | awk '{gsub(/-/," ",$0)}1' | awk '{ print toupper(substr($0, 1, 1)) substr($0, 2) }')
    echo "  - ${topic}:" >> $TECH_DOCS_DIR/mkdocs.yml
    # Get nested dirs
    for subdir in $(find $dir/* -maxdepth 1 -type d); do
        tech_docs_sub_dir=$(echo $subdir |  awk -F 'roadie-tech-docs/docs/' '{print $2}');
        subtopic=$(basename $subdir | awk '{gsub(/-/," ",$0)}1' | awk '{ print toupper(substr($0, 1, 1)) substr($0, 2) }')
        echo "    - ${subtopic[@]^}: '${tech_docs_sub_dir}/index.md'" >> $TECH_DOCS_DIR/mkdocs.yml
    done
done
echo "mkdocs file generated!"

echo "Removing unparsable markdown"
# remove unparsable markdown
for filename in $(find $TECH_DOCS_DIR/docs/* -type f -print); do
    if [[ $filename == *.md ]]; then
      # Replace relative path links to relative structure links + chop off unparsable md header
      sed 's/(\/docs\/\(.*\))/(\.\.\/\.\.\/\1)/g' $filename | tail -n +6 > "$filename.tmp" &&  mv "$filename.tmp" "$filename"
    fi
done
echo "Tech docs generation completed!"