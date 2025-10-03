---
title: Introduction
publishedDate: '2023-09-05'
description: An introduction about decorating components.
---

Decorators are an easy way to add links and annotations to Entities, without editing the YAML file that the Entity originates from.

Decorators are stored inside Roadie and available via the API.

## Decorating components

In order to access the decorator page, navigate to component page and select 'Decorate entity' from kebab menu at top right corner:

![Decorate component](./decorate_entity.webp)

This will navigate you to the page where you can decorate your component with links and annotations, without a need to manually edit YAML files in your version control system. All of this is done via UI, in specifically designated sections.

A visual representation of the YAML structure of the component, is shown in Existing Entity section of the page.

![Existing component](./existing_entity.webp)

Adding links is done via 'Add link' button in 'Links' section.

![Add link](./add_link.webp)

New link properties need to follow [link properties types](https://backstage.io/docs/features/software-catalog/descriptor-format#links-optional). Usually semantics of the type field are undefined, but we have added few predefined options you can select from a dropdown list.

Adding annotations is done via 'Add annotation' button in 'Annotations' section.

![Add annotation](./add_annotation.webp)

New annotation properties need to follow [annotation properties types](https://backstage.io/docs/features/software-catalog/descriptor-format#annotations-optional).

You will find all existing annotations used in components across the catalog in a dropdown list.

When you are happy with added annotations and/or links simply click 'Save' button and you will shortly see you changes.

![Save changes](./save_decorator.webp)

<b> Please note, all of the changes are kept and displayed in your Backstage instance, but YAML files in version control system remain intact. </b>
