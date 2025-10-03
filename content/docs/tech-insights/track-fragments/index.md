---
title: Track Fragments on catalog entities
publishedDate: '2024-07-14T08:30:00.0Z'
description: How to track fragments which define Owners on catalog entities.
---

Decorators (via the UI) and Fragments (via the API) allow you to easily extend the information associated with your catalog entities by storing it within Roadie, and not written to the `catalog-info.yaml` file. This accelerates the catalog enrichment process by not requiring the owners of the entities to modify files in the repository in order to add the relevant information; while long term move this information into a source control solution. This can be difficult to track the information stored as a decorator or fragment which you would like to be tracked.

With Roadie’s Tech Insights feature, there’s an easy way. In this tutorial, we’re going to:

1. Automatically scan entities in the Backstage catalog and record the fragments associated with them.
2. Create a check that tells us which components have decorations we want to track and manage.

As we go through this process, you’ll learn:

1. How to create Data Sources and Checks with Tech Insights.
2. How to parse files with JSONata in Roadie and extract facts from the Roadie Fragments API.
3. How to detect which catalog entities which have an Owner defined in a decoration.

Let’s get started.

(Read our blog post “[Decorators for rich Team pages](/blog/decorators-product-announcement/)” for more information on Decorators.)

# Prerequisite: Fragments API Proxy

Please see our guide on [How to create a Proxy](/docs/details/create-proxy/examples/fragments/) to create the proxy referenced in the steps below.

# Create Data Source for Entity Fragments

<iframe src="https://scribehow.com/embed/Create_Data_Source_for_Entity_Fragments__tnYE56uNTtqKA3_GQAWIWQ?skipIntro=true&removeLogo=true" width="100%" height="640" allowfullscreen frameborder="0"></iframe>

1\. Navigate to your Roadie tenant

2\. Click "Tech Insights"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/51a5f72c-c74f-4760-9249-ed6bf522fffc/ascreenshot.jpeg?tl_px=0,178&br_px=859,659&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=75,212)

3\. Click "DATA"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/fbafa42f-81f2-4e4c-9177-a44b21e4bc6c/ascreenshot.jpeg?tl_px=146,0&br_px=1006,480&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,84)

4\. Click "ADD DATA SOURCE"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/82799d13-2172-428b-a107-0f9dd0868d08/ascreenshot.jpeg?tl_px=353,0&br_px=1213,480&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,205)

5\. Click the "Name" field.
Type "Entity Fragments"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/25ae54c6-8ab5-47cf-8335-2a056b20afe2/File.jpeg?tl_px=0,86&br_px=859,567&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=291,212)

6\. Click the "Description (Optional)" field.
Type "Imports fragments data from the catalog entities which can be used to create Tech Insights checks."

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/a1a28ce3-0512-4eb0-a1c5-0cabfdf1ca01/File.jpeg?tl_px=0,202&br_px=859,683&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=273,212)

7\. Click the "Proxy" field
Click "/fragments"
Click the "Path Extension" field
Type `?entityRef={{entityRef}}`

![](https://colony-recorder.s3.amazonaws.com/files/2024-07-16/ef8d25c3-b96b-4743-9a8f-3f36c9ab1b5d/stack_animation.webp)

8\. Click the "Select Entity to test data source against" field

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/09f3853d-52e7-4075-9252-b6eec0f36662/ascreenshot.jpeg?tl_px=609,397&br_px=1469,878&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,212)

9\. Click the catalog entity you would like to test against

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/6a65f478-022e-4d51-9e02-d4e9450cf0d1/ascreenshot.jpeg?tl_px=57,317&br_px=917,798&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,212)

10\. Click "TEST"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/c1a58dab-0a41-4961-95f9-01a9edc78fa9/ascreenshot.jpeg?tl_px=665,403&br_px=1525,884&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=419,212)

11\. Results are displayed

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/2ec22b3b-d260-450d-9ca2-9cb2adb4732a/user_cropped_screenshot.jpeg?tl_px=74,59&br_px=1450,829&force_format=png&width=1120.0)

12\. Click the "Fact name" field
Type "Fragments Count"
Click the "JSONata query" field.
Type `$count($.items[*].fragment.*.*)`
Click the "Type" field
Click "Number"

![](https://colony-recorder.s3.amazonaws.com/files/2024-07-16/cda0e22d-4897-4f4d-b469-a0d3fec64d5d/stack_animation.webp)

13\. Click "ADD FACT"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/e80a6db7-aad0-47c1-8175-a9e3c5685021/ascreenshot.jpeg?tl_px=0,276&br_px=859,757&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=282,212)

14\. Click the "Fact name" field
Type "Fragments List"
Click the "JSONata query" field
Type `$map($.items[*].fragment.*, $string)`
Click the "Type" field
Click "String"

![](https://colony-recorder.s3.amazonaws.com/files/2024-07-16/e2b618b7-bc6f-4ba5-bd44-98c1f0dbf631/stack_animation.webp)

15\. Click "ADD FACT"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/4a0f928a-6a6c-4739-904b-a9d579efa4c2/ascreenshot.jpeg?tl_px=0,335&br_px=982,884&force_format=png&width=983&wat_scale=87&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=269,243)

16\. Click the "Fact name" field.
Type "Has Fragments"
Click the "JSONata query" field
Type `[$count($.items[*].fragment.*.*) > 0]`
Click the "Type" field
Click "Boolean"

![](https://colony-recorder.s3.amazonaws.com/files/2024-07-16/a45770ab-4eb1-4288-8796-07c8915be2ad/stack_animation.webp)

17\. Click "CHECK FACTS"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/0d6fe945-0c26-42cd-ae64-091e208956dd/File.jpeg?tl_px=12,356&br_px=872,837&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,212)

18\. The results are displayed

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/eb90ad5a-e2f7-44e5-af52-4794da27273e/user_cropped_screenshot.jpeg?tl_px=74,75&br_px=1450,845&force_format=png&width=1120.0)

<div role="alert">
  <div class="docs-cta__tip_title">Filtering Catalog Entities in the Data Source</div>
  <div  class="docs-cta__tip_message">
    <p>Use the "Applies to" filter to target the data source at components which have fragments or decorators. A catalog entity will have an additional annotation called "roadie.io/applied-fragments" when a fragment or decorator has been applied.</p>
    <p>We recommend starting with a highly targeted filter for initial experimentation and iteration. You can widen the filter later to capture more results.</p>
  </div>
</div>

19\. Click the "Has Annotation" field

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/b77a5aec-2722-4929-8ae0-b8b07b5eed4b/ascreenshot.jpeg?tl_px=0,238&br_px=1146,879&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=488,277)

20\. Click the "roadie.io/applied-fragments" annotation

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/65435d30-cbdd-43f5-b115-b42029137940/ascreenshot.jpeg?tl_px=0,65&br_px=859,546&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=268,212)

21\. Click "SAVE"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/e7778359-b033-4cc7-9bd5-568e5728c8af/ascreenshot.jpeg?tl_px=665,408&br_px=1525,889&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=656,415)

22\. The Data Source Facts Visualization shows the breakdown of the fact data in graph form

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/e5ae6943-4cd4-46f4-afe7-6d6206de8c5c/screenshot.jpeg?tl_px=100,0&br_px=1820,890&force_format=png&width=1120.0)

23\. The results of the facts are displayed on the Results table of the Data Source

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-16/41862037-2b89-4551-9bb3-2fc15c01b94b/user_cropped_screenshot.jpeg?tl_px=272,60&br_px=1648,829&force_format=png&width=1120.0)

# Create a Check that Shows if Owner is Defined as a Decoration

<iframe src="https://scribehow.com/embed/Create_Check_for_Entity_Fragments__Y_IIUx9pR0Kgf0Uchx56Xw?removeLogo=true" width="100%" height="640" allowfullscreen frameborder="0"></iframe>

1\. Navigate to your Roadie tenant

2\. Click "Tech Insights"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/5e0b11a5-277d-4699-a3b9-0cbe413b2617/ascreenshot.jpeg?tl_px=0,174&br_px=859,655&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=63,212)

3\. Click "CHECKS"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/8d05287c-7d19-4d1d-a319-df37c0a0bb46/ascreenshot.jpeg?tl_px=30,0&br_px=890,480&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,85)

4\. Click "ADD CHECK"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/4a430706-ad1d-4c64-a421-b28859c0760d/ascreenshot.jpeg?tl_px=416,0&br_px=1276,480&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,158)

5\. Click the "Name" field
Type "Owners should not be defined in Fragment"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/75202a28-50cb-426f-9a83-fc6acc7e2308/File.jpeg?tl_px=70,153&br_px=930,634&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,212)

6\. Click the "Description" field
Type "Catalog entities owner should be defined in the `catalog-info.yaml` file."

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/95da7f90-9314-4d2a-956b-42629907d25b/File.jpeg?tl_px=0,270&br_px=859,751&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=353,212)

7\. Click the "Data Source" field\
Click "Entity Fragments"\
Click the "Fact" field\
Click "Has Fragments"\
Click the "Fact operator" field\
Click "Is True"

![](https://colony-recorder.s3.amazonaws.com/files/2024-07-17/0a49fb07-e038-42e0-924d-1103daaec8d0/stack_animation.webp)

8\. Click "ADD CONDITION"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/bcfc3605-1573-4c00-98c1-a7ee9153a5a3/ascreenshot.jpeg?tl_px=37,131&br_px=896,612&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,212)

9\. Click the "Data Source" field
Click "Entity Fragments"
Click the "Fact" field
Click "Fragments List"
Click the "Fact operator" field
Click "Does not contain"
Click the "Value" field
Type "owner"

![](https://colony-recorder.s3.amazonaws.com/files/2024-07-17/2d2ac0fc-710d-43f7-adcc-6da4adadf7db/stack_animation.webp)

10\. Click "DRY RUN"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/89e7f8b0-bf5a-4696-bd89-515a49900eff/ascreenshot.jpeg?tl_px=0,408&br_px=859,889&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=298,235)

11\. Click the "Select Entity to run check against" field

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/65a6a8fa-30f6-481d-97c8-84b9234e04de/ascreenshot.jpeg?tl_px=575,0&br_px=1435,480&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,172)

12\. Click entity you want to test

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/8c9ddb24-9bcb-4193-b6ee-c3972884ebbe/ascreenshot.jpeg?tl_px=275,159&br_px=1135,640&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,212)

13\. Dry run results are displayed

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/2dd2c109-e4ba-48ca-bea0-ede38c99e2be/ascreenshot.jpeg?tl_px=297,202&br_px=1157,683&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,212)

14\. Click "CLOSE"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/ea138fbe-5e09-499a-9a06-1236e06c8d06/ascreenshot.jpeg?tl_px=592,408&br_px=1452,889&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,398)

<div role="alert">
  <div class="docs-cta__tip_title">Filtering the Catalog Entities in the Check</div>
  <div  class="docs-cta__tip_message">
    <p>Use the "Applies to" filter to target the check at components which have fragments or decorators. A catalog entity will have an additional annotation called "roadie.io/applied-fragments" when a fragment or decorator has been applied.</p>
    <p>We recommend starting with a highly targeted filter for initial experimentation and iteration. You can widen the filter later to capture more results.</p>
  </div>
</div>

15\. Click the "Has Annotation" field
Check the "roadie.io/applied-fragments" field

![](https://colony-recorder.s3.amazonaws.com/files/2024-07-17/ae42a02b-5cca-4ab9-ab0d-70e94f1b6e05/stack_animation.webp)

16\. Click "SAVE"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/bfd4fafa-af20-4b8e-b499-c35f85a1c225/ascreenshot.jpeg?tl_px=665,408&br_px=1525,889&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=625,389)

17\. The percent of entities the check are shown as a graph

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/77973a57-aac4-4a4a-bc05-d6a19f46a950/user_cropped_screenshot.jpeg?tl_px=74,59&br_px=1450,829&force_format=png&width=1120.0)

18\. Click "BY ENTITY"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/c504a0b2-6bf1-4b23-93d3-89b490cb58e0/ascreenshot.jpeg?tl_px=29,31&br_px=888,512&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=402,212)

19\. Choose an entity to examine

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/13560aa0-b8b3-4f01-a066-e559dea2f418/ascreenshot.jpeg?tl_px=0,218&br_px=859,699&force_format=png&width=860&wat_scale=76&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=294,212)

20\. The results of the checks are displayed

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-17/6b9c4dec-0e4c-4abe-95dd-1a9b12eaf661/user_cropped_screenshot.jpeg?tl_px=189,124&br_px=1335,764&force_format=png&width=1120.0)
