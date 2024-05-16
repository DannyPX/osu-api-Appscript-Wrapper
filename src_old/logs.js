/**
 * ## Get Appscript API Wrapper changelog
 * Shows the changes for each version since V21
 * @param {Int} version Version Number. ex. 21
 */
function APIChangelog(version) {
  switch (version) {
    case 21: return {
      changelog: "Adding all endpoints, but no implementation yet."
    };
    case 22: return {
      changelog: "Deprecated getToken for ClientCredentialsGrant."
    };
    case 23: return {
      changelog:
      {
        change_1: "Added changelog for this wrapper library. Fetch changelog using APIChangelog",
        change_2: "Breaking Change: active_tournament_banner in User has been deprecated, use active_tournament_banners instead. See: https://osu.ppy.sh/docs/index.html#breaking-changes.",
        change_3: "Breaking Change: number has been removed from documentation and replaced with integer or float to better reflect the type of number. See: https://osu.ppy.sh/docs/index.html#breaking-changes.",
        change_4: "Breaking Change: legacy_only paramater has been added to GetBeatmapPack, GetUserBeatmapScore, GetUserBeatmapScores, GetBeatmapScores, GetUserScores.",
        change_5: "Fixed getUserRecentActivity missing data."
      },
      osuWebVersion: "2024.306.0"
    };
    case 24: return {
      changelog: "Fix getBeatmapScores not correctly handling legacy scores",
      osuWebVersion: "2024.306.0"
    };
    case 25: return {
      changelog: 
      {
        change_1: "Added endpoints for Beatmap Packs, Beatmapset Discussions, getLookupBeatmap, getBeatmapScoresNonLegacy, Changelog, Comments, Events, Forum, Home, News, getKudosuRanking, getSpotlights, Wiki",
        change_2: "Breaking Change: Fixed getBeatmapAttributes altogether. ruleset and ruleset_id parameter has been added."
      },
      osuWebVersion: "2024.306.0"
    }
    default:
      console.error("Please insert the correct version number, starting at 21. ex. APIChangelog(21)")
      return;
  }
}

/** 
 * TODO Endpoints
 * - Beatmapsets
 *  - (All)
 * - Undocumented
 *  - scores
 *  - beatmapsets/events
 * 
 * TODO Parsers
 * - Beatmap Packs
 *  - (All)
 * - Beatmaps
 *  - Lookup Beatmap
 *  - Get Beatmap scores (non-legacy)
 * - Beatmapsets
 *  - (All)
 * - Changelog
 *  - (All)
 * - Comments
 *  - (All)
 * - Events
 *  - (All)
 * - Forum
 *  - (All)
 * - Home
 *  - (All)
 * - News
 *  - (All)
 * - Ranking
 *  - Get Kudosu Ranking
 *  - Get Spotlights
 * - Wiki
 *  - (All)
 * - Undocumented
 *  - scores
 *  - beatmapsets/events
 * 
 * TODO Other
 * - Documentation
*/