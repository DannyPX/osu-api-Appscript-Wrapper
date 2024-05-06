---
outline: deep
---

# Changelog

## V27 <Badge type="warning" text="WIP" /> <Badge type="warning" text="Beta" /> <Badge type="info" text="???" /> 
- Rewritten the entire library into TypeScript ([`typescript@3.8.2`](https://www.npmjs.com/package/typescript/v/3.8.2)). With transpiling from ES6+ to ES3 (using [`ts2gas`](https://github.com/grant/ts2gas)).
- <Badge type="danger" text="Breaking Change" /> Library Parsers are removed, it is now only provided as a snippet in the docs. The Parsers didnt work as intended due to the limitations of Apps Script Libraries.

## V26 <Badge type="warning" text="WIP" /> <Badge type="info" text="2024.506.0" /> 
- <span style="font-size:1.5em;">:tada: Added Documentation!</span>
- Fixed parameter naming to match docs.
- Fixed comments to match docs and be consistent.

## V25 <Badge type="tip" text="Stable" /> <Badge type="info" text="2024.306.0" /> 
- Added endpoints for **Beatmap Packs**, **Beatmapset Discussions**, `getLookupBeatmap`, `getBeatmapScoresNonLegacy`, **Changelog**, **Comments**, **Events**, **Forum**, **Home**, **News**, `getKudosuRanking`, `getSpotlights`, **Wiki**.
- <Badge type="danger" text="Breaking Change" /> Fixed `getBeatmapAttributes` altogether. `ruleset` and `ruleset_id` parameter has been added.
- Deprecated `customRequest` for `customGetRequest` and `customPostRequest`

## V24 <Badge type="info" text="2024.306.0" /> 
- Fix `getBeatmapScores` not correctly handling legacy scores.

## V23 <Badge type="info" text="2024.306.0" /> 
- Added changelog for this wrapper library. Fetch changelog using `APIChangelog`
- <Badge type="danger" text="Breaking Change" /> `active_tournament_banner` in **User** has been deprecated, use `active_tournament_banners` instead. See: https://osu.ppy.sh/docs/index.html#breaking-changes.
- <Badge type="danger" text="Breaking Change" /> `number` has been removed from documentation and replaced with `integer` or `float` to better reflect the type of number. See: https://osu.ppy.sh/docs/index.html#breaking-changes.
- <Badge type="danger" text="Breaking Change" /> `legacy_only` paramater has been added to `getBeatmapPack`, `getUserBeatmapScore`, `getUserBeatmapScores`, `getBeatmapScores`, `getUserScores`.
- Fixed `getUserRecentActivity` missing data.

## V22
- Deprecated `getToken` for `ClientCredentialsGrant`.

## V21
- Adding all endpoints, but no implementation yet.