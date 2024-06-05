---
outline: deep
---

# Changelog

## Wrapper V26 / Docs V1.1 <Badge type="warning" text="Beta" /> <Badge type="info" text="2024.514.0" />
- Changed TypeScript transpiler version to ([`typescript@4.9.5`](https://www.npmjs.com/package/typescript/v/4.9.5)).
- Fixed some documentation errors.
- Added Response Types to every implemented endpoint in the documentation

## Wrapper V26 / Docs V1.0 <Badge type="warning" text="Beta" /> <Badge type="info" text="2024.514.0" /> 
- <span style="font-size:1.5em;">:tada: Added Documentation!</span>
- Rewritten the entire library into TypeScript ([`typescript@3.8.2`](https://www.npmjs.com/package/typescript/v/3.8.2)). With transpiling from ES6+ to ES3 using [`ts2gas`](https://github.com/grant/ts2gas).
- <Badge type="danger" text="Breaking Change" /> Library Parsers are removed. The Parsers didnt work as intended due to the limitations of Apps Script Libraries. Only the default `JSON.parse` is used
- <Badge type="danger" text="Breaking Change" /> Token parameter is now the first parameter rather than last.
- <Badge type="danger" text="Breaking Change" /> Removed page parameter from `getRanking`, as it didnt match the osu!web documentation. Use Cursor instead.
- Added `grant_type` and `scope` parameter to `ClientCredentialsGrant`.
- Added `cursor_string` parameter to `getBeatmapPacks`, `getBeatmapsetDiscussions`, `getEvents`, `getTopicAndPosts`, `getScores`, `getNewsListing`.
- Added `mods` parameter to `getUserBeatmapScore`, `getBeatmapScores`.
- Added `type` parameter to `getBeatmapScores`.
- Added `cursor` parameter to `getComments`, `getRanking`.
- Added `limit`, `start` and `end` to `getTopicAndPosts`.

## Wrapper V25 <Badge type="tip" text="Stable" /> <Badge type="info" text="2024.306.0" /> 
- Added endpoints for **Beatmap Packs**, **Beatmapset Discussions**, `getLookupBeatmap`, `getBeatmapScoresNonLegacy`, **Changelog**, **Comments**, **Events**, **Forum**, **Home**, **News**, `getKudosuRanking`, `getSpotlights`, **Wiki**.
- <Badge type="danger" text="Breaking Change" /> Fixed `getBeatmapAttributes` altogether. `ruleset` and `ruleset_id` parameter has been added.
- Deprecated `customRequest` for `customGetRequest` and `customPostRequest`

## Wrapper V24 <Badge type="info" text="2024.306.0" /> 
- Fix `getBeatmapScores` not correctly handling legacy scores.

## Wrapper V23 <Badge type="info" text="2024.306.0" /> 
- Added changelog for this wrapper library. Fetch changelog using `APIChangelog`
- <Badge type="danger" text="Breaking Change" /> `active_tournament_banner` in **User** has been deprecated, use `active_tournament_banners` instead. See: https://osu.ppy.sh/docs/index.html#breaking-changes.
- <Badge type="danger" text="Breaking Change" /> `number` has been removed from documentation and replaced with `integer` or `float` to better reflect the type of number. See: https://osu.ppy.sh/docs/index.html#breaking-changes.
- <Badge type="danger" text="Breaking Change" /> `legacy_only` paramater has been added to `getBeatmapPack`, `getUserBeatmapScore`, `getUserBeatmapScores`, `getBeatmapScores`, `getUserScores`.
- Fixed `getUserRecentActivity` missing data.

## Wrapper V22
- Deprecated `getToken` for `ClientCredentialsGrant`.

## Wrapper V21
- Adding all endpoints, but no implementation yet.