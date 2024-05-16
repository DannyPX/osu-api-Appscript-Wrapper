function parseJSONBeatmapUserScore_(json) {
  var data = JSON.parse(json)

  return parseBeatmapUserScore_(data)
}

function parseBeatmapUserScore_(data) {
  return {
    "position": data.position,
    "score": {
      "accuracy": data.score.accuracy,
      "best_id": data.score.best_id,
      "created_at": data.score.created_at,
      "id": data.score.id,
      "max_combo": data.score.max_combo,
      "mode": data.score.mode,
      "mode_int": data.score.mode_int,
      "mods": data.score.mods,
      "passed": data.score.passed,
      "perfect": data.score.perfect,
      "pp": data.score.pp,
      "rank": data.score.rank,
      "replay": data.score.replay,
      "score": data.score.score,
      "statistics": {
        "count_100": data.score.statistics.count_100,
        "count_300": data.score.statistics.count_300,
        "count_50": data.score.statistics.count_50,
        "count_geki": data.score.statistics.count_geki,
        "count_katu": data.score.statistics.count_katu,
        "count_miss": data.score.statistics.count_miss
      },
      "user_id": data.score.user_id,
      "current_user_attributes": { "pin": data.score.current_user_attributes.pin },
      "beatmap": {
        "beatmapset_id": data.score.beatmap.beatmapset_id,
        "difficulty_rating": data.score.beatmap.difficulty_rating,
        "id": data.score.beatmap.id,
        "mode": data.score.beatmap.mode,
        "status": data.score.beatmap.status,
        "total_length": data.score.beatmap.total_length,
        "user_id": data.score.beatmap.user_id,
        "version": data.score.beatmap.version,
        "accuracy": data.score.beatmap.accuracy,
        "ar": data.score.beatmap.ar,
        "bpm": data.score.beatmap.bpm,
        "convert": data.score.beatmap.convert,
        "count_circles": data.score.beatmap.count_circles,
        "count_sliders": data.score.beatmap.count_sliders,
        "count_spinners": data.score.beatmap.count_spinners,
        "cs": data.score.beatmap.cs,
        "deleted_at": data.score.beatmap.deleted_at,
        "drain": data.score.beatmap.drain,
        "hit_length": data.score.beatmap.hit_length,
        "is_scoreable": data.score.beatmap.is_scoreable,
        "last_updated": data.score.beatmap.last_updated,
        "mode_int": data.score.beatmap.mode_int,
        "passcount": data.score.beatmap.passcount,
        "playcount": data.score.beatmap.playcount,
        "ranked": data.score.beatmap.ranked,
        "url": data.score.beatmap.url,
        "checksum": data.score.beatmap.checksum
      },
      "user": {
        "avatar_url": data.score.user.avatar_url,
        "country_code": data.score.user.country_code,
        "default_group": data.score.user.default_group,
        "id": data.score.user.id,
        "is_active": data.score.user.is_active,
        "is_bot": data.score.user.is_bot,
        "is_deleted": data.score.user.is_deleted,
        "is_online": data.score.user.is_online,
        "is_supporter": data.score.user.is_supporter,
        "last_visit": data.score.user.last_visit,
        "pm_friends_only": data.score.user.pm_friends_only,
        "profile_colour": data.score.user.profile_colour,
        "username": data.score.user.username,
        "country": { "code": data.score.user.country.code, "name": data.score.user.country.name },
        "cover": {
          "custom_url": data.score.user.cover.custom_url,
          "url": data.score.user.cover.url,
          "id": data.score.user.cover.id
        }
      }
    }
  }
}



function parseJSONScoresArray_(json) {
  var data = JSON.parse(json)

  var scores = []

  data.scores.forEach(function (score) {
    scores.push(
      parseScore_(score)
    )
  })

  return {
    "scores": scores
  }
}

function parseScore_(data) {
  return {
    "accuracy": data.accuracy,
    "best_id": data.best_id,
    "created_at": data.created_at,
    "id": data.id,
    "max_combo": data.max_combo,
    "mode": data.mode,
    "mode_int": data.mode_int,
    "mods": data.mods,
    "passed": data.passed,
    "perfect": data.perfect,
    "pp": data.pp,
    "rank": data.rank,
    "replay": data.replay,
    "score": data.score,
    "statistics": {
      "count_100": data.statistics.count_100,
      "count_300": data.statistics.count_300,
      "count_50": data.statistics.count_50,
      "count_geki": data.statistics.count_geki,
      "count_katu": data.statistics.count_katu,
      "count_miss": data.statistics.count_miss
    },
    "user_id": data.user_id,
    "current_user_attributes": { "pin": data.current_user_attributes.pin }
  }
}



function parseJSONUserScoresArray_(json) {
  var data = JSON.parse(json)

  var scores = []

  data.scores.forEach(function (score) {
    scores.push(
      parseUserScore_(score)
    )
  })

  return {
    "scores": scores
  }
}

function parseUserScore_(data) {
  return {
    "accuracy": data.accuracy,
    "best_id": data.best_id,
    "created_at": data.created_at,
    "id": data.id,
    "max_combo": data.max_combo,
    "mode": data.mode,
    "mode_int": data.mode_int,
    "mods": data.mods,
    "passed": data.passed,
    "perfect": data.perfect,
    "pp": data.pp,
    "rank": data.rank,
    "replay": data.replay,
    "score": data.score,
    "statistics": {
      "count_100": data.statistics.count_100,
      "count_300": data.statistics.count_300,
      "count_50": data.statistics.count_50,
      "count_geki": data.statistics.count_geki,
      "count_katu": data.statistics.count_katu,
      "count_miss": data.statistics.count_miss
    },
    "user_id": data.user_id,
    "current_user_attributes": { "pin": data.current_user_attributes.pin },
    "user": {
      "avatar_url": data.user.avatar_url,
      "country_code": data.user.country_code,
      "default_group": data.user.default_group,
      "id": data.user.id,
      "is_active": data.user.is_active,
      "is_bot": data.user.is_bot,
      "is_deleted": data.user.is_deleted,
      "is_online": data.user.is_online,
      "is_supporter": data.user.is_supporter,
      "last_visit": data.user.last_visit,
      "pm_friends_only": data.user.pm_friends_only,
      "profile_colour": data.user.profile_colour,
      "username": data.user.username,
      "country": { "code": data.user.country.code, "name": data.user.country.name },
      "cover": {
        "custom_url": data.user.cover.custom_url,
        "url": data.user.cover.url,
        "id": data.user.cover.id
      }
    }
  }
}



function parseJSONBeatmap_(json) {
  var data = JSON.parse(json)

  return parseBeatmap_(data)
}



function parseJSONBeatmaps_(json) {
  var data = JSON.parse(json)

  var beatmaps = []

  data.beatmaps.forEach(function (beatmap) {
    beatmaps.push(
      parseBeatmap_(beatmap)
    )
  })

  return beatmaps
}

function parseBeatmap_(data) {
  return {
    "beatmapset_id": data.beatmapset_id,
    "difficulty_rating": data.difficulty_rating,
    "id": data.id,
    "mode": data.mode,
    "status": data.status,
    "total_length": data.total_length,
    "user_id": data.user_id,
    "version": data.version,
    "accuracy": data.accuracy,
    "ar": data.ar,
    "bpm": data.bpm,
    "convert": data.convert,
    "count_circles": data.count_circles,
    "count_sliders": data.count_sliders,
    "count_spinners": data.count_spinners,
    "cs": data.cs,
    "deleted_at": data.deleted_at,
    "drain": data.drain,
    "hit_length": data.hit_length,
    "is_scoreable": data.is_scoreable,
    "last_updated": data.last_updated,
    "mode_int": data.mode_int,
    "passcount": data.passcount,
    "playcount": data.playcount,
    "ranked": data.ranked,
    "url": data.url,
    "checksum": data.checksum,
    "beatmapset": {
      "artist": data.beatmapset.artist,
      "artist_unicode": data.beatmapset.artist_unicode,
      "covers": {
        "cover": data.beatmapset.covers.cover,
        "card": data.beatmapset.covers.card,
        "list": data.beatmapset.covers.list,
        "slimcover": data.beatmapset.covers.slimcover,
      },
      "creator": data.beatmapset.creator,
      "favourite_count": data.beatmapset.favourite_count,
      "hype": data.beatmapset.hype,
      "id": data.beatmapset.id,
      "nsfw": data.beatmapset.nsfw,
      "play_count": data.beatmapset.play_count,
      "preview_url": data.beatmapset.preview_url,
      "source": data.beatmapset.source,
      "status": data.beatmapset.status,
      "title": data.beatmapset.title,
      "title_unicode": data.beatmapset.title_unicode,
      "track_id": data.beatmapset.track_id,
      "user_id": data.beatmapset.user_id,
      "video": data.beatmapset.video,
      "availability": { "download_disabled": data.beatmapset.availability.download_disabled, "more_information": data.beatmapset.availability.more_information },
      "bpm": data.beatmapset.bpm,
      "can_be_hyped": data.beatmapset.can_be_hyped,
      "discussion_enabled": data.beatmapset.discussion_enabled,
      "discussion_locked": data.beatmapset.discussion_locked,
      "is_scoreable": data.beatmapset.is_scoreable,
      "last_updated": data.beatmapset.last_updated,
      "legacy_thread_url": data.beatmapset.legacy_thread_url,
      "nominations_summary": { "current": data.beatmapset.nominations_summary.current, "required": data.beatmapset.nominations_summary.required },
      "ranked": data.beatmapset.ranked,
      "ranked_date": data.beatmapset.ranked_date,
      "storyboard": data.beatmapset.storyboard,
      "submitted_date": data.beatmapset.submitted_date,
      "tags": data.beatmapset.tags,
      "ratings": data.beatmapset.ratings
    },
    "failtimes": {
      "fail": data.failtimes.fail,
      "exit": data.failtimes.exit
    },
    "max_combo": data.max_combo
  }
}



function parseJSONBeatmapAttributes_(json) {
  var data = JSON.parse(json)

  return parseBeatmapAttributes_(data)
}

function parseBeatmapAttributes_(data) {
  return 	{
    "attributes": {
        "star_rating": data.attributes.star_rating,
        "max_combo": data.attributes.max_combo,
        "great_hit_window": data.attributes.great_hit_window,
        "score_multiplier": data.attributes.score_multiplier,
      }
  }
}
