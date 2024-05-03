---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "osu!api v2 Wrapper"
  text: "Apps Script Library"
  tagline: Documentatation for the Google Apps Script Library Wrapper for osu!api v2
  actions:
    - theme: brand
      text: Getting Started
      link: /endpoints/getting-started
    - theme: alt
      text: Docs
      link: /endpoints/endpoints
    - theme: alt
      text: Snippets
      link: /snippets/

features:
  - icon: 🔥
    title: Easy to Use
    details: No extra code, just pure endpoints.
  - icon: 🛠️
    title: Custom Functions
    details: Possible to create custom endpoints for the wrapper.
  - icon: 📝
    title: Many Code Snippets
    details: Tons of code snippets to use for your App Script Project for easier use.
---

---
### Quick to use
<br />

<Badge type="info">Google Appscript Script ID</Badge> `1nT8zViGGMRg5HaH6laQlfnlNNGnZ2nbp5oihdBjgr-Yii7shk_c1hDTC`

```js
let api = osuAPILibrary

function getFirstBeatmap() {
  const clientCredentials = api.ClientCredentialsGrant(client_id, client_secret)
  var firstBeatmap = api.getBeatmap(75, clientCredentials.access_token)
}
```