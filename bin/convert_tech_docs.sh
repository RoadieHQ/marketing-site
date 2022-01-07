#!/bin/bash

SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ONBOARDING_DOCS_DIR=$SCRIPTDIR/../content/docs/*
TECH_DOCS_DIR=$SCRIPTDIR/../roadie-tech-docs
mkdir -p $TECH_DOCS_DIR/docs
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
echo "  - Plugins: 'plugins.md'" >> $TECH_DOCS_DIR/mkdocs.yml
echo "mkdocs file generated!"

echo "Removing unparsable markdown"
# remove unparsable markdown
for filename in $(find $TECH_DOCS_DIR/docs/* -type f -print); do
    if [[ $filename == *.md ]]; then
        tail -n +6 "$filename" > "$filename.tmp" && mv "$filename.tmp" "$filename"
    fi
done

cp $SCRIPTDIR/templates/*.md $TECH_DOCS_DIR/docs
echo "Tech docs generation completed!"