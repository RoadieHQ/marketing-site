---
title: How to Create a Proxy for Entity Fragments
publishedDate: '2024-07-18T15:15:00.0Z'
description: How to create a basic proxy in Roadie.

type: basic
order: 1
humanName: Fragments
scribe: https://scribehow.com/embed/Create_a_new_Basic_Proxy__mkhvMjmAS1uz2u9gGstsQw?skipIntro=true&removeLogo=true
---

# Create Proxy for Entity Fragments
How to create a proxy for use with a Tech Insights Data Source Data Provider.

<iframe src="https://scribehow.com/embed/Create_Proxy_for_Entity_Fragments__21PeDaxMQoKveREokiknvw?removeLogo=true" width="100%" height="640" allowfullscreen frameborder="0"></iframe>

1\. Navigate to your Roadie tenant


2\. Click "Administration"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-10/5532ae5f-4844-4658-8f97-bdaf669b26e9/ascreenshot.jpeg?tl_px=0,0&br_px=1525,889&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=23,547)


3\. Click "Plugins"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-10/dbc11c06-4337-4e55-ab2b-0480fdbffb21/ascreenshot.jpeg?tl_px=0,0&br_px=1525,889&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=199,406)


4\. Click "Proxy"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-10/3a154069-3fa9-43f5-bf3c-95821ad5922d/ascreenshot.jpeg?tl_px=0,0&br_px=1525,889&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=195,375)


5\. Click "ADD PROXY"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-10/b35d3c96-1d3e-4f42-8976-5f5517140006/ascreenshot.jpeg?tl_px=0,0&br_px=1525,889&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=978,328)


6\. Click the "Path" field and type "/fragments"
Click the "Target" field and type "https://api.roadie.so/api/catalog/fragments"

![](https://colony-recorder.s3.amazonaws.com/files/2024-07-11/388d1e0d-6ea5-4409-8fec-a8bef36ac6a5/stack_animation.webp)


<div role="alert">
  <div class="docs-cta__tip_title">Did you know?</div>
  <div  class="docs-cta__tip_message">
    <p>You can set your API token as the value for any `CUSTOMER_TOKEN` you are not using.</p>
  </div>
</div> 


7\. Click "Advanced Settings"
Click "ADD"
Click the "newKey Key" field and type "Authorization"
Click the "Authorization" field and type "Bearer ${CUSTOMER_TOKEN_3}"

![](https://colony-recorder.s3.amazonaws.com/files/2024-07-11/b1380d08-f349-4f37-9643-d7676163307a/stack_animation.webp)


8\. Click "SAVE"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-10/f75a74c0-fca7-499c-9642-063f409cf6e6/ascreenshot.jpeg?tl_px=0,0&br_px=1525,889&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=419,428)


9\. Click "APPLY & RESTART"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-10/f15b1697-51ff-483f-99e9-b200733d5a55/ascreenshot.jpeg?tl_px=0,0&br_px=1525,889&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=500,351)


10\. Click "CONFIRM"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-10/f7e8b012-2614-4cac-abc7-37b5a47ef3d8/ascreenshot.jpeg?tl_px=0,0&br_px=1525,889&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=696,344)


11\. Click "Roadie Settings"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-10/48c724d3-b387-4440-9e35-c7207ddebf6d/ascreenshot.jpeg?tl_px=0,0&br_px=1525,889&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=239,290)


12\. Click "Secrets"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-10/79242928-84eb-4d28-b100-e3053fd39c3c/ascreenshot.jpeg?tl_px=0,0&br_px=1525,889&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=213,320)


<div role="alert">
  <div class="docs-cta__alert_title">Wait!</div>
  <div  class="docs-cta__alert_message">
    <p>Make sure you set the value of the same Customer Token you specified in your Proxy header.</p>
  </div>
</div> 


13\. Click the pencil icon next to the "CUSTOMER_TOKEN_3" secret

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-10/2ee00e45-f46b-4c98-9006-110c3628f3bd/ascreenshot.jpeg?tl_px=0,0&br_px=1525,889&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=707,308)


14\. Click the "Secret Value" field and enter your API token

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-10/99d8f960-4fb4-4696-9115-69bba92c2ffc/ascreenshot.jpeg?tl_px=0,0&br_px=1525,889&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=463,327)


15\. Click "SAVE"

![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-07-10/ecd1e61f-64bd-4ac4-bce9-e3eb22ece37b/ascreenshot.jpeg?tl_px=0,0&br_px=1525,889&force_format=png&width=1120.0&wat=1&wat_opacity=0.7&wat_gravity=northwest&wat_url=https://colony-recorder.s3.us-west-1.amazonaws.com/images/watermarks/FB923C_standard.webp&wat_pad=710,370)


<div role="alert">
  <div class="docs-cta__info_title">What's Next?</div>
  <div  class="docs-cta__info_message">
    <p>Check out <a href="/docs/tech-insights/track-fragments/">Track Fragments</a> to start using your newly created proxy.</p>
  </div>
</div> 
