---
outline: deep
---

# Changelog

## V25 <Badge type="tip" text="Latest" /> <Badge type="info" text="2024.306.0" /> 
- Added endpoints for **Beatmap Packs**, **Beatmapset Discussions**, `getLookupBeatmap`, `getBeatmapScoresNonLegacy`, **Changelog**, **Comments**, **Events**, **Forum**, **Home**, **News**, `getKudosuRanking`, `getSpotlights`, **Wiki**.
- <Badge type="danger" text="Breaking Change" /> Fixed `getBeatmapAttributes` altogether. `ruleset` and `ruleset_id` parameter has been added.

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